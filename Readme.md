### Step by Step
```
npm init
```

```
npm install express mongoose cors --save
npm install nodemon --save-dev
npm install body-parser
```

server.js
```
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
```

Edit package.json and add
```
"scripts": {
    "dev": "nodemon server.js",   
  },
```


Cek Listen Port
```
lsof -iTCP -sTCP:LISTEN | grep mongo
```

Create Folder app
Create Folder app/config
Create Folder app/controllers
Create Folder app/models

Create server.js

```
npm run dev
```

Create cofig/database.js <br>
Create models/index.model.js <br>
Create models/mahasiswa.model.js <br>
Create controllers/mahasiswa.controller.js <br>
Create routes/mahasiswa.routes.js <br>



