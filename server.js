const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'hello app',
        name: 'Ho Quang Tri',
        branch: 'master'
    });
});

app.get('/new', (req, res) => {
    res.json({
        message: 'new',
        date: new Date()
    })
});

let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server on run at port: ${port}`);
})
