const express = require('express')
const app = express()
const Blog=require('./db/blogpost')

const data = require("./connect")
data.connectMongoDB();

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.get('/home',async function (req, res) {

//   let newblog = new Blog({
//     author: "new",
//     title: "sdf",
//     body: "sdfs",
//     date: new Date()

//   })

//    let data = await newblog.save();
//     res.send({answer : data})
//  })

//  app.get('/get',async function (req, res) {


//   let data = await Blog.find();


//    res.send({answer : data})
// })

let newblog=new Blog({
  author: "user1",
  title: "sample",
  body: "description",
  date: new Date()
})

newblog.save();


app.get('/home', function (req, res) {
    res.send('Sam Sangeeth')
  })


app.listen(3000,()=>{
    console.log('listening on port 3000');
})