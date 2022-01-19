미들웨어로 요청/응답에 다양한 기능을 추가할 수 있다.   
패키지를 설치하면 이미 만들어진 기능을 사용할 수 있다.


---
#### 실무에 자주 사용하는 패키지 설치
npm i morgan cookie-parser express-session dotenv 


### morgan 
요청과 응답에 대한 정보를 콘솔에 기록 (로그출력)   
```
app.use(morgan('dev'));
```

### static : express 기본제공 미들웨어 
* 정적 파일들을 제공하는 라우터 역할을 하는 미들웨어   
* app.use('요청경로', express.static('실제경로'));
* 함수의 인수로 정적파일이 담겨있는 폴더 지정
```
res.sendFile('/', express.static(path.join(__dirname, 'public')));
```

### morgan
요청과 응답에 대한 정보를 콘솔에 기록 (로그출력)
```
app.use(morgan('dev'));
```



