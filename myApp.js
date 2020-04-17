
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
// app.get("/json", function(req, res) {
// if(process.env.MESSAGE_STYLE === 'uppercase') {
//   res.json({
//     "message": "HELLO JSON"
// });
// }
//   res.json({"message": "Hello json"
// });
// });
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.get('/json', function(req, res, next){
console.log( `${req.method} ${req.path} - ${req.ip}` );
next();
});

/** 8) Chaining middleware. A Time server */
app.get("/now",(req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

/** 9)  Get input from client - Route parameters */
app.get("/:word/echo",(req,res)=>{
  const {word} = req.params;
  res.json({
    echo :word,
  });
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
// app.get("/name",function(req,res){
//   var f = req.query.first;
//   var l = req.query.last;
//   var {first: f,last: l}=req.query;
//   res.json({
//     name:`${f} ${l}`
//   })
// });
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** 12) Get data form POST  */
app.post("/name",function(req,res){
  var name = req.body.first+" "+req.body.last;
  res.json({name: name});
});


// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
