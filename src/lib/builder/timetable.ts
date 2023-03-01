export const columns = [
	'Maanantai',
	'Tiistai',
	'Keskiviikko',
	'Torstai',
	'Perjantai'
	//'Lauantai',
	//'Sunnuntai'
];

export const fullRows = [
	{ duration: '17.00-17.30', text: '17.00' },
	{ duration: '17.30-18.00', text: '17.30' },
	{ duration: '18.00-18.30', text: '18.00' },
	{ duration: '18.30-19.00', text: '18.30' },
	{ duration: '19.00-19.30', text: '19.00' },
	{ duration: '19.30-20.00', text: '19.30' },
	{ duration: '20.00-20.30', text: '20.00' },
	{ duration: '20.30-21.00', text: '20.30' }
];

export const rows = fullRows.map((r) => r.duration);

export const ageGroups = [
	{ colors: '#c6c05d', ages: '7-9', name: 'sudenpennut' },
	{ colors: '#d4791e', ages: '9-11', name: 'seikkailijat' },
	{ colors: '#5e0f75', ages: '12-15', name: 'tarpojat' },
	{ colors: '#33652e', ages: '15-17', name: 'samoajat' },
	{ colors: '#6e470a', ages: '18-22', name: 'vaeltajat' },
	{ colors: '#253764', ages: '23+', name: 'aikuiset' }
];

export const splitValues = ['left', 'right', 'full'];
