const express =require('express');
 const QRCode = require('qrcode');
const app = express();
const PORT = 3000;
  
const localIpUrl= 'http://192.168.43.20:3000';


/* app.get('/',(req,res)=>{
    res.send('Hello World');
}) */

app.get('/',async (req,res)=>{
    try{
    const qr = await QRCode.toDataURL(localIpUrl);
    res.send(`<img src=${qr} alt="qr code"/>`);
    }catch(err){
        console.error(err);
    }
})

app.listen(PORT,()=>{
    console.log(`Server Running at Port ${PORT}`);
})
