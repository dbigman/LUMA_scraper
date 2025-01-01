import requests
import json5
import os
import re
import datetime
from collections import Counter

def timestamp_count(file_path):
    """
    Counts unique timestamps in a JSON5 file and returns the formatted time and date of the latest timestamp.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json5.load(file)
        
        timestamps = [entry.get("timestamp") for entry in data if "timestamp" in entry]
        unique_timestamps = Counter(timestamps)
        count = len(unique_timestamps)
        
        if timestamps:
            latest_timestamp = max(timestamps)
            dt = datetime.datetime.strptime(latest_timestamp, "%Y-%m-%dT%H:%M:%S.%f")
            formatted_date = dt.strftime("%d-%b-%y")
            formatted_time = dt.strftime("%I:%M %p")
        else:
            formatted_date, formatted_time = "N/A", "N/A"
        
        return count, formatted_date, formatted_time
    except Exception as e:
        print(f"Error while processing timestamps: {e}")
        return 0, "N/A", "N/A"

def append_to_json5(new_data, output_path):
    """
    Appends a list of dictionaries (`new_data`) to an existing .json5 file at `output_path`.
    """
    try:
        if os.path.exists(output_path):
            with open(output_path, "r", encoding="utf-8") as file:
                existing_data = json5.load(file)
        else:
            existing_data = []
        
        updated_data = existing_data + new_data
        with open(output_path, "w", encoding="utf-8") as file:
            json5.dump(updated_data, file, indent=4)
        
        print(f"Data successfully appended to {output_path}")
    except Exception as e:
        print(f"Error appending data to JSON5 file: {e}")

def add_timestamp(data):
    """
    Add a unique timestamp to each item in the dataset (if `data` is a list of dicts)
    or to the dict itself (if `data` is a single dict).
    """
    if isinstance(data, list):  # If the data is a list of dictionaries
        for item in data:
            item["timestamp"] = datetime.datetime.now().isoformat()  # Unique timestamp for each item
    elif isinstance(data, dict):  # If it's a single dictionary
        data["timestamp"] = datetime.datetime.now().isoformat()
    return data

def fetch_and_save_data(url, save_path):
    """
    Fetches raw text content from `url` and saves it to `save_path`.
    """
    try:
        response = requests.get(url)
        response.raise_for_status()
        with open(save_path, "w", encoding="utf-8") as file:
            file.write(response.text)
        print(f"Data successfully fetched and saved to {save_path}")
    except Exception as e:
        print(f"Error fetching data: {e}")

def extract_json_from_js(file_path):
    """
    Extracts arrays from a JavaScript file of the form:
        const varName = [ ... ];
    and flattens them into a single list of dictionaries.
    Each object is tagged with a 'source' key to know which JS variable it came from.
    """
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
        
        pattern = re.compile(r'const\s+(\w+)\s*=\s*(\[.*?\]);', re.DOTALL)
        matches = pattern.findall(content)
        print(f"Matches found: {len(matches)}")
        
        all_items = []
        for var_name, array_str in matches:
            array_str = array_str.strip().replace('\n', '').replace('\r', '')
            try:
                array = json5.loads(array_str)
                for item in array:
                    item["source"] = var_name
                    all_items.append(item)
                # print(f"Parsed array from {var_name}: {array}")
            except json5.JSONDecodeError as e:
                print(f"JSONDecodeError in {var_name}: {e}")
            except Exception as e:
                print(f"Unexpected error in {var_name}: {e}")
        
        return all_items
    except Exception as e:
        print(f"Error extracting JSON from JavaScript: {e}")
        return None

if __name__ == "__main__":
    url = "https://operationdata.prepa.pr.gov/dataSource.js"
    js_save_path = "LUMA_dataSource.js"
    json5_output_path = "LUMA_dataSource.json5"

    fetch_and_save_data(url, js_save_path)
    extracted_data = extract_json_from_js(js_save_path)
    
    if extracted_data:
        # print(f"Type of extracted_data: {type(extracted_data)}")
        # print(f"First item in extracted_data: {extracted_data[0]}")
        extracted_data = add_timestamp(extracted_data)
        # print(f"Data after adding timestamp: {extracted_data[0]}")
        # print("Calling append_to_json5 with new data.")
        append_to_json5(extracted_data, json5_output_path)
    
    count, date, time = timestamp_count(json5_output_path)
    print(f"Scrape count: {count}, Latest scrape: {date}, Time: {time}")