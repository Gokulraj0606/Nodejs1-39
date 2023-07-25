const http = require("http")
const fs = require("fs")
const PORT = process.env.PORT || 8000
// const { error } = require("console")

const server = http.createServer((req, res) => {
    let fileName = +new Date()
    res.writeHead(200, { "content-type": "text/html" })
    fs.writeFile(`files/${fileName}.txt`,
        `Time is - ${new Date()}`, "utf-8", () => {
            fs.readFile(`files/${fileName}.txt`, "utf-8", (error, data) => {
                if (error)
                    console.log(error)
                else
                    res.end(data)

            })
        })


})

server.listen(PORT, () => console.log(`server listening in port ${PORT}`))