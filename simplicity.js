import files from 'fs';
import engine from './engine.js'

// ! Got the code

let args = process.argv;

if ( args.length != 3 ){
	console.log('Usage "node simplicity.js [input file]"')
	process.exit()
}

let targetFile = args[2];
let inputCode = files.readFileSync(`./${targetFile}`, 'utf8' );

// ! Do processing

let output = engine ( inputCode );

// ! Save to file

files.writeFileSync('./build/output.js', output)

// ! Run language

console.log('')
eval( output );