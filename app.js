const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/health", (req, res) => {
    res.sendFile("C:\\Projects\\Data-Ingest-and-Normalization-API\\README.md");
    console.log(`The health endoint was hit with the request ${req}`)
});


app.post('/api/ingest', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
