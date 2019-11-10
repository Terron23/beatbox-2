const mongoose = require('mongoose');
const passport = require('passport');
const stripe = require("stripe")("sk_test_V6wlaNvsxc7i7lpa0BfseByb");
const keys = require('../config/keys');
const where = require('node-where');
require('../models/User.js');
require('../models/StudioBooked.js');


const StudioBooked = mongoose.model('studioBooked');
const Users = mongoose.model('users');
// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:



module.exports = (app) => {



app.get('/auth/google', passport.authenticate('google', {
    
    scope: ['profile', 'email']
  
}));

app.get('/auth/google/callback', passport.authenticate('google'),

(req, res) =>{
    res.redirect('/')
}
);


app.get('/auth/facebook', passport.authenticate('facebook'));


app.get('/auth/facebook/callback', passport.authenticate('facebook'), 
  (req, res) =>{
    res.redirect('/')
}
);

app.get('/api/logout', (req, res)=>{
req.logout();
res.redirect('/');
});

app.get('/api/current_user', (req, res)=>{

res.send(req.user);
});

app.post('/api/update_user', (req, res)=>{

  let {username: name, email, instagram, twitter, facebook} = req.body
  console.log(req.body);
  Users.update(
    {  _id: req.user.id },
    {
     email,
     name,
     social: [instagram, twitter, facebook]
    },
    { upsert: true },
    (err,data)=>{
        if (err){
            console.log(err);
        }else{
            console.log("update succeded");
        }
    }
 )
})


app.post("/api/payment" , async (req, res) => {
    //const token = req.body.stripeToken; // Using Express
    console.log(req.body)
    let { 
      studioOwner,
      studioName,
      studioId,
      dateBooked,
      payment,
      cardInfo,} = req.body;
    try {
        let {status} = await stripe.charges.create({
          amount: payment*100,
          currency: "usd",
          description: "",
          source: req.body.token
        });

        let studio = new StudioBooked({ 
          _user: req.user.id,
          studioOwner,
          studioName,
          studioId,
          dateBooked,
          payment,
          cardInfo,
          
          }).save();
    
        res.json({status});
      } catch (err) {
        // res.status(500).end();
        console.log(err);
        console.log("Error")
      }
})

}
