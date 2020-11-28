'use strict'
const fs = require('fs')
fs.writeFile('target.txt', 'Some more changes...', (err) => {
	if(err) throw err
	console.log('File saved!')
})

