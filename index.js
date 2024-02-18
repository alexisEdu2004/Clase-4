

const app= require('express')();
const PORT = 4000;

app.listen(
    PORT,
    ()=> console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req,res)=>{
    res.send("Alexis,20962,5A")
});

app.post('/postRequest',(req,res)=>{
    res.send("Alexis Eduardo Aguilar Zacarias,20962,5A")
});

