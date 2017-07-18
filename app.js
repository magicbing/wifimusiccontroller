var express = require('express')
var path = require('path')
var os = require('os')

var appExpress = express()

var controller = require('./functions.js')

appExpress.use(express.static(path.join(__dirname, 'public')));

//controller.audioPlay() 执行播放命令

appExpress.get('/', function (req, res) {
  //res.send('<a href="controller.html">controller</a>')
  res.redirect('controller.html');
})

appExpress.get('/play',function(req,res){
  res.send(controller.audioPlay())
});

appExpress.get('/next',function(req,res){
  res.send(controller.audioNext())
});

appExpress.get('/prev',function(req,res){
  res.send(controller.audioPrev())
});

appExpress.get('/VolUp',function(req,res){ res.send(controller.audioVolUp()) });
appExpress.get('/VolDown',function(req,res){ res.send(controller.audioVolDown()) });

function getLocalIp(){  
  var map = []
  var ifaces = os.networkInterfaces()
  for (var dev in ifaces) {
    if(ifaces[dev][1].address.indexOf('192.168') != -1) {    
      return ifaces[dev][1].address
    }
  }
  return map
}

var localIP = getLocalIp()
var localPort = 3333

appExpress.listen(localPort)

console.log('Server running at ' + localIP + ':' +  localPort)