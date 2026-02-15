// started operating system process
console.log("first task")
console.time()

setTimeout(() => {
    console.log("second task")
}, 0);

console.timeEnd()
console.log("third task")
// completed and exited operating system process

// setTimeout is asynchronous and asynchronous code is offloaded so it doesn’t block the main thread.

/* 
When Node.js encounters an asynchronous operation (like file I/O, timers, or network requests)
it offloads the work to the OS or the libuv thread pool
and the event loop handles the result later.
*/

/* 
The asynchronous task is started (offloaded) immediately
But its callback/function is invoked only after the synchronous code completes
The event loop waits for the call stack to be empty before running async callbacks
*/