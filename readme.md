# LUMA Scraper

This Python script fetches and processes energy generation data from Puerto Rico's LUMA Energy system.

## Data Sources

The script retrieves data from:
`https://operationdata.prepa.pr.gov/dataSource.js`

## Data Formats

### Input
- JavaScript file containing arrays of energy data:
  - `dataFuelCost`: Fuel costs by location
  - `dataByFuel`: Energy generation by fuel type
  - `dataMetrics`: System metrics and capacity data
  - `dataLoadPerSite`: Detailed generation data by power plant site and unit

### Output
- `LUMA_dataSource.js`: Raw JavaScript data file
- `LUMA_dataSource.json5`: Processed JSON5 data with:
  - Source tracking (which array each entry came from)
  - Timestamps of when each entry was processed
  - Multiple runs of data collection with different timestamps

## Usage

1. Run the script:
   ```bash
   python LUMA_scraper.py
   ```

2. The script will:
   - Fetch data from the source URL
   - Save raw data to `LUMA_dataSource.js`
   - Process data into JSON5 format
   - Save processed data to `LUMA_dataSource.json5`

## Requirements

- Python 3.x
- `requests` library (install with `pip install requests`)

## Example Data

Processed JSON5 entries include:
```json5
{
    place: "San Juan",
    value: 100,
    source: "dataFuelCost",
    timestamp: "2025-01-01T16:38:14.033049"
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
