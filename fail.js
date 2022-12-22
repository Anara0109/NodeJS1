let fs = require("fs")
fs.writeFileSync("test.txt", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sint nemo voluptatum molestias! Fugiat, amet quasi, molestiae ullam sunt repellat at, ipsum ea cumque voluptas autem ratione nesciunt officiis magni?")

function getFirstWord() {
    return fs.readFileSync("test.txt", { encoding: "utf-8" }).split(" ")[0]
}

function getLastWord() {
    return fs.readFileSync("test.txt", { encoding: "utf-8" }).split(" ").reverse()[0]
}
module.exports = { 
    f: getFirstWord(), 
    g: getLastWord()
}
