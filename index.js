const fs=require("fs");
const express=require("express")
const csv=require("csvtojson");
const {Parser} = require("json2csv");
const cors=require("cors");
//add your paths for below two files
const path_for_getting_data="../Downloads/receive_from_page.csv"
const path_for_writing_data="../Downloads/send_to_page.csv"
const PORT=8080



const app=express()
app.use(express.json());
app.use(cors())


var file_data= getdata(path_for_getting_data)
var update_data=getdata(path_for_writing_data)

async function getdata(path){
    let read_data= await csv().fromFile(path)
    //console.log(read_data)
    return read_data
}



app.get("/",async (req,res)=>{
    try { return res.send(await file_data)}
     catch (error) {
    return res.send({error:"some error occured"})    
    }
   
})

app.get("/updated_data",async (req,res)=>{
    try { return res.send(await update_data)}
     catch (error) {
    return res.send({error:"some error occured"})    
    }
   
})
app.post("/",async(req,res)=>{
    try {
     
        let csv_file= await update_data
        csv_file.push(req.body)
        const updated_csv=  new Parser({feilds:["PARAMETER","READING","DATE","TIME"]}).parse(csv_file);
        fs.writeFileSync(path_for_writing_data,updated_csv)
        console.log(update_data)
        return  res.send("done")
        
    } catch (error) {
        return res.send({error:"some error occured"})
    }
  

})




app.listen(PORT,()=>{
    console.log("connected")
})