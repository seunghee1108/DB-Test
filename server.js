const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static(__dirname + '/public'));

const { MongoClient } = require('mongodb');
const { default: test } = require('node:test');

let db
// 사이트에서 Connect에 링크 있음(id, pw 작성)
const url = 'mongodb+srv://admin:sh123@cluster0.lfkcymr.mongodb.net/?retryWrites=true&w=majority'
// mongoDB 접속
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  // 내가 생성한 project name
  db = client.db('test')
  app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
   });
}).catch((err)=>{
  console.log(err)
})

// app.get('/', (req, res) => {
//   res.send('안녕하세요');
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// async..await 
app.get('/test', async(req, res) => {
  const test = await db.collection('data').find().toArray()
  console.log(test)
  res.send('DB내용')
});
