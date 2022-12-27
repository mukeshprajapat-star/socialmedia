const mongoose=require("mongoose");

exports.connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((data)=>{
        console.log(`mongo is connected with server ${data.connection.host}`);
    });
}
