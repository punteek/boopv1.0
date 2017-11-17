const express = require('express')
const app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// home page
app.get('/', (req, res) => {
	res.send("Hello World!");
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))