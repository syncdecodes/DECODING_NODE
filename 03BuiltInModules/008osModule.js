// The os module gives us information about the computer system our Node.js app is running on.

const os = require('os') // os = operating system

const user = os.userInfo()
console.log(user) // info about current user

const upt = os.uptime()
console.log(`system uptime is`, upt, 'seconds') // system uptime is seconds since last boot(shut down)

const currentOs = {
    name: os.type(), // Gives the operating system name.
    release: os.release(), // Returns the operating system’s kernel version.
    totalMemory: os.totalmem(), // Total system memory.
    freeMemory: os.freemem(), // Gives the amount of free RAM (in bytes).
    platform: os.platform(), // Tells us the operating system platform.
    homedir: os.homedir() // Returns the path to the user’s home folder.
}
console.log(currentOs)
// NOTE WHEN WE IMPORT A MODULE WE ACTUALLY INVOKE IT