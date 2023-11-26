const express = require('express');
const app = express();

const PORT = 3000;

const { MongoClient } = require('mongodb')

let db
// 사이트에서 Connet에 링크 있음(id, pw 작성)
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

app.get('/', (req, res) => {
  res.send('안녕하세요');
});
