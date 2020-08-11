import cases from './cases/_index.js'

// ! Extract the different stages

// Run first on all text as a whole
let global = cases.filter( c => c.type == 'global' )

// Runs on each resultant line
let lines = cases.filter( c => c.type == 'lines' )


// ! Do processing 

export default function ( code ) {

	global.forEach( g => {
		console.log(`Running '${g.label}' (global) . . .`)
		code = g.exec( code )
	})

	console.log('Simplicity Build Success!')

	return code;
}
