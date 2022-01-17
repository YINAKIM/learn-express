const express = require('express');
const path = require('path');

const app = express(); // express 모듈을 app변수에 할당

// app.set(키,값) 으로 데이터 저장
app.set('port', process.env.PORT || 3000);

// app.get(키,값) 으로 데이터 get
app.get('/', (req, res) => {
    // res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/index.html')); // 내부적으로 fs를 사용하는 sendFile
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})