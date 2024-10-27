# komikos
komikos is a simple web server that may not employ the best tactics but it works well with 0 dependencies!

you need node.js (i use 22.x i haven't tested other versions yet)

## so how do i use it
run `npm install komikos` and then make a file called `server.js`

```javascript
const app = require("komikos");

app(8080,"./public",()=>{
  console.log("komikos server started");
});
```

you can set the port to anything between 0 and 65536 (i think) and set the path to anything, just wherever you put the html templates (whatever you do, DO NOT SET IT TO A PATH OUTSIDE THE PROJECT FOLDER.)

then make a file called index.html in your templates folder and yeah there you go

now run `npm run dev` and boom it should work