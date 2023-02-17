const fs = require('fs');
// !!!!!!!!^^^^^^^MUST REQUIRE FS IN ORDER FOR ANY OF THIS TO WORK!!!!!!!!!!!!
const folderName = process.argv[2] || 'Project'
console.log(fs)

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/styles.css`)
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!")
    console.log(e);
}
// !!!!!!!!!!!!!!GENERAL EXAMPLES!!!!!!!!!!!!!!
// !!!!!!!!!!!!ASYNCHRONOUS VERSION!!!!!!!!!!!!
// fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!")
//     if (err) throw err;
// });

// !!!!!!!!!!!!SYNCROUNOUS VERSION!!!!!!!!!!!!
// Mainly important if you want/NEED things to happen in the order they are typed.
// fs.mkdirSync('Cats');
// console.log("I COME AFTER MKDIR IN THE FILE!")

