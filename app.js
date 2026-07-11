let express = require('express');
let cors= require('cors');
app.use(cors());
let app =express();
let port =9000;

app.get('/ping', (req,res)=>{
    res.send({
        message : 'Hello, World'
});
});

app.listen(port,()=>{
    console.log( `Server is running on port http://localhost:${port}/ping`);
});