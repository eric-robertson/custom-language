export default [
	{
		type : 'global',
		label : 'remove upper-case',
		exec : text => text.toLowerCase()
	},
	{
		type : 'global',
		label : 'remove extra spaces',
		exec : text => text.replace(/ +/g, ' ')
	},
	{
		type : 'global',
		label : 'remove extra lines',
		exec : text => text.replace(/\s*;(\n|\r)*/g, ';\n')
	}
]