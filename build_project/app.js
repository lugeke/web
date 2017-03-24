
var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
app.get('/', function(req, res) {
    console.log('/')
    //res.sendfile('/index.html')
    res.sendFile(path.join(__dirname ,'index.html'))
})


app.get('/action', function(req, res) {
    var project = req.query.project
    var version = req.query.version
    var action = req.query.action
    
    if (project && version && action) {
        console.log(req.query)
        res.download(path.join(__dirname, 'index.html'))
    } else {
        res.send('params error')
    }
    
})

app.listen(3000, function() {
    console.log('server started');
})