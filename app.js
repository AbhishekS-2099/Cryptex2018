const express= require('express');


const app=express();
require('dotenv').config();


app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));


app.get('/',(req,res)=>{
    res.render('comingsoon')
})



app.listen(process.env.PORT, process.env.IP, function(err){
	if(err){
		console.log(err);
	} else{
		console.log('Started successfully ' + process.env.PORT);
	}
});
