// server.js
 
const http = require('http');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
 
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
 

 
 
const contentToWrite = 'Text File Contents';
 
fs.writeFile('newFile.txt', contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('تمت عملية الكتابة بنجاح!');
});

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('محتوى الملف:', data);
});


 
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);
    console.log('البيانات كـ JSON:', jsonData);
  });
  
  
const dataToWrite = { name: 'John', age: 30 };
 
const jsonData = JSON.stringify(dataToWrite, null, 2);
 
fs.writeFile('output.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('تمت عملية الكتابة بنجاح!');
});