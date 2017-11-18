const express = require('express')
const app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// -------------------------------------------------------------------------


// home page endpoint
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// post endpoint
app.get('/post.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/post.html'));
});

// if "something" is clicked
// redirect to /index
/*
app.post('/index', function(req, res){
	if(clicked == true)
	{
		res.redirect('/index');
	}
});
*/