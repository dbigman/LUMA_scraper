const dataFechaAcualizado = '1/1/2025' + ' 4:46:02 PM';
const dataFuelCost = [
	{place: 'San Juan', value: 100},
	{place: 'San Juan CC', value: 123},
	{place: 'Palo Seco', value: 100},
	{place: 'Aguirre', value: 100},
	{place: 'Aguirre CC', value: 116},
	{place: 'Costa Sur', value: 95},
	{place: 'Cambalache', value: 114},
	{place: 'Mayaguez', value: 111},
	{place: 'Costa Sur LNG', value: 8},
];
const dataByFuel = [
	{fuel: 'Bunker', value: 8},
	{fuel: 'Diesel', value: 49},
	{fuel: 'LNG', value: 42},
	{fuel: 'Coal', value: 0},
	{fuel: 'Renew', value: 2},
];
const dataMetrics = [
	{Index:'0', Desc:'Total de Generación', value: 1314},
	{Index:'1', Desc:'PREPA', value: 79},
	{Index:'2', Desc:'PPOA', value: 21},
	{Index:'3', Desc:'Fossil', value: 98},
	{Index:'4', Desc:'Renewable', value: 2},
	{Index:'5', Desc:'Reserva en Rotación', value: 37},
	{Index:'6', Desc:'Reserva Operacional', value: 40},
	{Index:'7', Desc:'Capacidad Disponible', value: 1333},
	{Index:'8', Desc:'Próxima Hora MW', value: 1828},
	{Index:'9', Desc:'Máxima para Hoy', value: 1536},
	{Index:'10', Desc:'Máxima Mensual', value: 1536},
	{Index:'11', Desc:'Máxima Anual', value: 1536},
	{Index:'12', Desc:'Máxima para Hoy TS', value: '1/1/2025 5:10:03 PM'},
	{Index:'13', Desc:'Máxima para Hoy TS', value: '1/1/2025 5:10:03 PM'},
	{Index:'14', Desc:'Máxima Anual TS', value: '1/1/2025 5:10:00 PM'},
];
const dataLoadPerSite = [
	{Index:'0', Type:'Hidroelectricas', Desc:'Dos Bocas', SiteTotal: 5,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId:'0'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId:'0'},
			{Index:'2', Unit:'Hidro 3', MW: 5, MVar:'3', Cost:0, ParentId:'0'},
		]
	},
	{Index:'1', Type:'Hidroelectricas', Desc:'Caonillas', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId:'1'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId:'1'},
		]
	},
	{Index:'2', Type:'Hidroelectricas', Desc:'Garzas', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId:'2'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId:'2'},
			{Index:'2', Unit:'Hidro 3', MW: 0, MVar:'0', Cost:0, ParentId:'2'},
		]
	},
	{Index:'3', Type:'Hidroelectricas', Desc:'Rio Blanco', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId:'3'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId:'3'},
		]
	},
	{Index:'4', Type:'Hidroelectricas', Desc:'Toro Negro', SiteTotal: 2,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 1, MVar:'0', Cost:0, ParentId:'4'},
			{Index:'1', Unit:'Hidro 2', MW: 1, MVar:'0', Cost:0, ParentId:'4'},
			{Index:'2', Unit:'Hidro 3', MW: 0, MVar:'0', Cost:0, ParentId:'4'},
			{Index:'3', Unit:'Hidro 4', MW: 0, MVar:'0', Cost:0, ParentId:'4'},
			{Index:'4', Unit:'Hidro 5', MW: 0, MVar:'0', Cost:0, ParentId:'4'},
		]
	},
	{Index:'5', Type:'Hidroelectricas', Desc:'Yauco', SiteTotal: 2,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId:'5'},
			{Index:'1', Unit:'Hidro 2', MW: 2, MVar:'0', Cost:0, ParentId:'5'},
			{Index:'2', Unit:'Hidro 3', MW: 0, MVar:'0', Cost:0, ParentId:'5'},
		]
	},
	{Index:'6', Type:'COGEN', Desc:'AES', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 0, MVar:'0', Cost:0, ParentId:'6'},
			{Index:'1', Unit:'Unit 2', MW: 0, MVar:'0', Cost:0, ParentId:'6'},
		]
	},
	{Index:'7', Type:'COGEN', Desc:'Ecoelectrica', SiteTotal: 260,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 167, MVar:'23', Cost:6.66, ParentId:'7'},
			{Index:'1', Unit:'Gas 2', MW: 0, MVar:'0', Cost:6.66, ParentId:'7'},
			{Index:'2', Unit:'STG', MW: 94, MVar:'48', Cost:6.66, ParentId:'7'},
		]
	},
	{Index:'8', Type:'Turbina de Gas', Desc:'Estaciones GT', SiteTotal: 505,
		units:[
			{Index:'0', Unit:'Palo Seco', MW: 133, MVar:'0', Cost:9.56, ParentId:'8'},
			{Index:'1', Unit:'Vega Baja', MW: 0, MVar:'0', Cost:0, ParentId:'8'},
			{Index:'2', Unit:'Costa Sur', MW: 19, MVar:'0', Cost:0, ParentId:'8'},
			{Index:'3', Unit:'Jobos', MW: 20, MVar:'1', Cost:25.87, ParentId:'8'},
			{Index:'4', Unit:'Daguao', MW: 20, MVar:'2', Cost:24.73, ParentId:'8'},
			{Index:'5', Unit:'Yabucoa', MW: 15, MVar:'0', Cost:27.13, ParentId:'8'},
			{Index:'6', Unit:'Aguirre', MW: 0, MVar:'0', Cost:0, ParentId:'8'},
			{Index:'7', Unit:'FEMA GT PS', MW: 93, MVar:'11', Cost:0, ParentId:'8'},
			{Index:'8', Unit:'FEMA GT SJ', MW: 205, MVar:'28', Cost:0, ParentId:'8'},
		]
	},
	{Index:'9', Type:'Turbina de Gas', Desc:'Mayaguez', SiteTotal: 146,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 49, MVar:'3', Cost:19.4, ParentId:'9'},
			{Index:'1', Unit:'Gas 2', MW: 50, MVar:'0', Cost:19.4, ParentId:'9'},
			{Index:'2', Unit:'Gas 3', MW: 22, MVar:'10', Cost:23.37, ParentId:'9'},
			{Index:'3', Unit:'Gas 4', MW: 24, MVar:'0', Cost:23.23, ParentId:'9'},
		]
	},
	{Index:'10', Type:'Turbina de Gas', Desc:'Cambalache', SiteTotal: 156,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 0, MVar:'0', Cost:0, ParentId:'10'},
			{Index:'1', Unit:'Gas 2', MW: 79, MVar:'3', Cost:20.72, ParentId:'10'},
			{Index:'2', Unit:'Gas 3', MW: 77, MVar:'6', Cost:20.85, ParentId:'10'},
		]
	},
	{Index:'11', Type:'Ciclo Combinado', Desc:'San Juan', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'CTG 5', MW: 0, MVar:'0', Cost:0, ParentId:'11'},
			{Index:'1', Unit:'STG 5', MW: 0, MVar:'0', Cost:0, ParentId:'11'},
			{Index:'2', Unit:'CTG 6', MW: 0, MVar:'0', Cost:0, ParentId:'11'},
			{Index:'3', Unit:'STG 6', MW: 0, MVar:'0', Cost:0, ParentId:'11'},
		]
	},
	{Index:'12', Type:'Ciclo Combinado', Desc:'Aguirre Stag 1', SiteTotal: 130,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 31, MVar:'2', Cost:24.54, ParentId:'12'},
			{Index:'1', Unit:'Gas 2', MW: 50, MVar:'0', Cost:22.24, ParentId:'12'},
			{Index:'2', Unit:'Gas 3', MW: 0, MVar:'0', Cost:0, ParentId:'12'},
			{Index:'3', Unit:'Gas 4', MW: 49, MVar:'7', Cost:22.27, ParentId:'12'},
			{Index:'4', Unit:'STG 1', MW: 0, MVar:'0', Cost:0, ParentId:'12'},
		]
	},
	{Index:'13', Type:'Ciclo Combinado', Desc:'Aguirre Stag 2', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 0, MVar:'0', Cost:0, ParentId:'13'},
			{Index:'1', Unit:'Gas 2', MW: 0, MVar:'0', Cost:0, ParentId:'13'},
			{Index:'2', Unit:'Gas 3', MW: 0, MVar:'0', Cost:0, ParentId:'13'},
			{Index:'3', Unit:'Gas 4', MW: 0, MVar:'0', Cost:0, ParentId:'13'},
			{Index:'4', Unit:'STG 2', MW: 0, MVar:'0', Cost:0, ParentId:'13'},
		]
	},
	{Index:'14', Type:'Vapor', Desc:'San Juan', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Unit 7', MW: 0, MVar:'0', Cost:0, ParentId:'14'},
			{Index:'1', Unit:'Unit 8', MW: 0, MVar:'0', Cost:0, ParentId:'14'},
			{Index:'2', Unit:'Unit 9', MW: 0, MVar:'0', Cost:0, ParentId:'14'},
			{Index:'3', Unit:'Unit 10', MW: 0, MVar:'0', Cost:0, ParentId:'14'},
		]
	},
	{Index:'15', Type:'Vapor', Desc:'Palo Seco', SiteTotal: 105,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 0, MVar:'0', Cost:0, ParentId:'15'},
			{Index:'1', Unit:'Unit 2', MW: 0, MVar:'0', Cost:0, ParentId:'15'},
			{Index:'2', Unit:'Unit 3', MW: 105, MVar:'36', Cost:19.12, ParentId:'15'},
			{Index:'3', Unit:'Unit 4', MW: 0, MVar:'0', Cost:0, ParentId:'15'},
		]
	},
	{Index:'16', Type:'Vapor', Desc:'Aguirre', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 0, MVar:'0', Cost:0, ParentId:'16'},
			{Index:'1', Unit:'Unit 2', MW: 0, MVar:'0', Cost:0, ParentId:'16'},
		]
	},
	{Index:'17', Type:'Vapor', Desc:'Costa Sur', SiteTotal: 19,
		units:[
			{Index:'0', Unit:'Unit 3', MW: 0, MVar:'0', Cost:0, ParentId:'17'},
			{Index:'1', Unit:'Unit 4', MW: 0, MVar:'0', Cost:0, ParentId:'17'},
			{Index:'2', Unit:'Unit 5', MW: 0, MVar:'0', Cost:0, ParentId:'17'},
			{Index:'3', Unit:'Unit 6', MW: 0, MVar:'0', Cost:0, ParentId:'17'},
		]
	},
	{Index:'18', Type:'Renovable', Desc:'Wind', SiteTotal: 5,
		units:[
			{Index:'0', Unit:'Pattern', MW: 6, MVar:'0', Cost:16.29, ParentId:'18'},
			{Index:'1', Unit:'Punta Lima', MW: 0, MVar:'3', Cost:0, ParentId:'18'},
		]
	},
	{Index:'19', Type:'Renovable', Desc:'Solar', SiteTotal: 9,
		units:[
			{Index:'0', Unit:'San Fermin', MW: 0, MVar:'-1', Cost:0, ParentId:'19'},
			{Index:'1', Unit:'Ilumina', MW: 1, MVar:'-4', Cost:21.43, ParentId:'19'},
			{Index:'2', Unit:'Horizon', MW: 2, MVar:'0', Cost:19.6, ParentId:'19'},
			{Index:'3', Unit:'Coto Laurel', MW: 0, MVar:'0', Cost:0, ParentId:'19'},
			{Index:'4', Unit:'Oriana', MW: 6, MVar:'24', Cost:19.6, ParentId:'19'},
			{Index:'5', Unit:'Fonroche', MW: 0, MVar:'0', Cost:0, ParentId:'19'},
		]
	},
	{Index:'20', Type:'Renovable', Desc:'Landfill', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Toa Baja', MW: 0, MVar:'0', Cost:0, ParentId:'20'},
			{Index:'1', Unit:'Fajardo', MW: 0, MVar:'0', Cost:0, ParentId:'20'},
		]
	},
	{Index:'21', Type:'Turbina de Gas', Desc:'Palo Seco', SiteTotal: 133,
		units:[
			{Index:'0', Unit:'CT Block 1', MW: 38, MVar:'0', Cost:22.95, ParentId:'21'},
			{Index:'1', Unit:'CT Block 2', MW: 18, MVar:'0', Cost:22.47, ParentId:'21'},
			{Index:'2', Unit:'CT Block 3', MW: 0, MVar:'0', Cost:0, ParentId:'21'},
			{Index:'3', Unit:'GT1', MW: 19, MVar:'0', Cost:23.3, ParentId:'21'},
			{Index:'4', Unit:'GT2', MW: 19, MVar:'0', Cost:22.59, ParentId:'21'},
			{Index:'5', Unit:'GT3', MW: 18, MVar:'0', Cost:22.47, ParentId:'21'},
			{Index:'6', Unit:'GT4', MW: 0, MVar:'0', Cost:0, ParentId:'21'},
			{Index:'7', Unit:'GT5', MW: 0, MVar:'0', Cost:0, ParentId:'21'},
			{Index:'8', Unit:'GT6', MW: 0, MVar:'0', Cost:0, ParentId:'21'},
		]
	},
	{Index:'22', Type:'Turbina de Gas', Desc:'Aguirre', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'GT1', MW: 0, MVar:'0', Cost:0, ParentId:'22'},
			{Index:'1', Unit:'GT2', MW: 0, MVar:'0', Cost:0, ParentId:'22'},
		]
	},
	{Index:'23', Type:'Turbina de Gas', Desc:'Costa Sur', SiteTotal: 19,
		units:[
			{Index:'0', Unit:'GT1', MW: 0, MVar:'0', Cost:18.55, ParentId:'23'},
			{Index:'1', Unit:'GT2', MW: 19, MVar:'0', Cost:0, ParentId:'23'},
		]
	},
];