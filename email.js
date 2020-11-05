
app.intent('sendMail',(conv,params)=>{


const nodemailer=require('nodemailer');
const transporter=nodemailer.createTransport({


    service:'gmail',
    auth:{

        user:'vrushjyotik@gmail.com',
        pass:'pqlamzpqlamz'
    }
});
var mailOptions={
    from:'vrushjyotik@gmail.com',
    to:email,
    subject:'hey testing',
    text:'mail body'
};

transporter.sendMail(mailOptions,function(err,info){

    if(err){
        console.log(err);

    }else{
        console.log('email sent');
    }
});

});
