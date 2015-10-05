require('babel/register');

var express = require('express');
var React = require('react');
var HtmlComponent = require('./components/Html');
const htmlComponent = React.createFactory(HtmlComponent);
var app = express();

app.get('/', function (req, res) {
    // Build HTML
    var html = React.renderToStaticMarkup(htmlComponent({
        clientFile: 'main.js'
    }));
    res.send(html);
});

// Start server
const port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});