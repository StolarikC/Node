const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')

const allCats = [blue, sadie, janet]

module.exports = allCats;
// A single index.js file is typically used to store the exports of an entire folder.
// When a directory is called by "require()", it searches for an index.js file to pull exports from.
