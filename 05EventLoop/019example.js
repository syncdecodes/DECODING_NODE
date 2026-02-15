setTimeout(function time1() {
    console.log('you clicked the button')
}, 2000);

console.log('start');

setTimeout(function time2() {
    console.log('you clicked the button again')
}, 4000);

console.log('end');

/*
EXECUTION FLOW:

1) setTimeout(time1, 2000)
   - setTimeout() is executed synchronously and goes to the call stack
   - The timer is offloaded to the environment (Node / browser)
   - The callback function (time1) does NOT run now

2) console.log('start')
   - Goes to the call stack
   - Executes immediately
   - Removed from the call stack

3) setTimeout(time2, 4000)
   - setTimeout() goes to the call stack
   - Timer is offloaded
   - Callback waits in the background

4) console.log('end')
   - Goes to the call stack
   - Executes immediately
   - Removed from the call stack

5) After 2 seconds
   - time1 is placed in the callback queue
   - Event loop checks the call stack (it is empty)
   - time1 is moved to the call stack and executed

6) After 4 seconds
   - time2 is placed in the callback queue
   - Event loop moves it to the call stack and executes it

NOTE:
- Only code in the call stack is executed
- setTimeout schedules the callback; it does not execute it
- The event loop runs continuously
*/
