const express = require('express');
const path = require('path');

const app = express(); // express 모듈을 app변수에 할당

// app.set(키,값) 으로 데이터 저장
app.set('port', process.env.PORT || 3000);


// app.use(미들웨어)
app.use((req,res,next) => {
    console.log('모든 요청에 다 실행되는 app.use 미들웨어');
    next();
});


// app.get(키,값) 으로 데이터 get
app.get('/', (req, res,next) => {
    //res.sendFile(path.join(__dirname, '/index.html')); // 내부적으로 fs를 사용하는 sendFile
    console.log('/ GET요청에서만 실행되는 "/"라우터');
    next();
}, (req, res)=>{
    throw new Error('에러발생시 에러미들웨어가 처리하도록 throw')
});

//에러처리 미들웨어 : 전부 사용하지 않더라도 param은 꼭 4개를 받아야됨
app.use((err, req, res, next)=>{
    console.error("err:",err); // err: Error: 에러발생시 에러미들웨어가 처리하도록 throw => 에러가 발생한 곳에서 throw한 내용 출력됨
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})