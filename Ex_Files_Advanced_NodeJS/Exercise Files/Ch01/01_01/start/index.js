
/**
 * NOTE: the callback function must be synchronous
 */

// Continuation passing style: CPS
function hideString(str, done) {
	/**
	 * what process.nextTick does is to execute the statement 
	 * inside its callback and return the value in the next loop
	 * (after the console.log('==end==') is executed)
	 */
	process.nextTick(() => {
		done(str.replace(/[a-zA-Z]/g, 'X'));
	})
	
}

hideString("Hello World", (hidden) => {
	console.log(hidden)
});

console.log('==end==')