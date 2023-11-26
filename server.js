const express = require('express');
const app = express();

const PORT = 3000;

const { MongoClient } = require('mongodb')

let db
const url = 'mongodb+srv://admin:sh123@cluster0.lfkcymr.mongodb.net/?retryWrites=true&w=majority'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('test')
}).catch((err)=>{
  console.log(err)
})

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
 });


app.get('/', (req, res) => {
  res.send('안녕하세요');
});
