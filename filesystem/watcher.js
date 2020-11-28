//cause the program to be executed in strict mode
'use strict';

//fs is a default file system module in node js
const fs = require('fs')
fs.watch('target.txt', () => console.log('File changed!'));
console.log('Now watching target.txt for changes...');


