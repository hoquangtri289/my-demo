const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'hello app',
        name: 'Ho Quang Tri',
        branch: 'master'
    });
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server on run at port: ${port}`);
})
