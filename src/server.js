import express from 'express'
const app=express()

app.get("/user",(req,res)=>{
    res.send("Minha primeira api ")

})

app.get("/user/:name",(req,res)=>{
    const name=req.params.name
    res.json({name})
})



app.listen(3333,()=>console.log("running server"))
