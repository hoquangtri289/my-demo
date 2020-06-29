const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: "hello to dev", address: "32322343232423423"});
    console.log('hello');
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server on run at port: ${port}`);
})