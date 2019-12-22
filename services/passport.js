const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const googleClientID = keys.googleClientID;
const googleClientSecret = keys.googleClientSecret;
const FACEBOOK_APP_ID = keys.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = keys.FACEBOOK_APP_SECRET;

const db = keys.postgresDB;
const host = keys.postgresHost;
const password = keys.postgresPassword;
const user = keys.postgresUser;
const uri = keys.postgresConnectionString;

const Pool = require('pg').Pool
const pool = new Pool({
  user: user,
  host: host,
  database: db,
  password: password,
  port: 5432,
  connectionString: uri,
  ssl: true,

})


passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {

  pool.query(`SELECT * FROM users WHERE _id = ${id}`,  (err, results) => {
    if(err) {
    }
   
    done(null, results.rows[0])
  })
});


passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
   
      callbackURL: "/auth/google/callback",
     
      proxy: true
    },

    async (accessToken, refreshToken, profile, done) => {
    
     const existingUser= 
     await pool.query(`SELECT * FROM users WHERE social_id = '${profile.id}'`,  
     (err, results) => {
        if(err) {
          
          return done(err)
        }
        

         else if(results.rows[0]){
         done(null, results.rows[0])
         } 
         else {
        pool.query(`Insert into users(social_id, email, contact_name, username, password) values('${profile.id}', 
          '${profile.emails[0].value}', '${profile.displayName}', '${profile.emails[0].value}', '${profile.id}')`,  
          (err, results) => {
            if(err) {
            
              return done(err)
            }
          else{
            pool.query(`SELECT * FROM users WHERE social_id = '${profile.id}'`,  (err, results) => {
              if(err) {
                
                return done(err)
              }
              
              done(null, results.rows[0]);
            })
          }})
         }
      })

     
 

    
    })
  
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile);
      const existingUser = await User.findOne({ FACEBOOK_APP_ID: profile.id });
      if (existingUser) {
        
        done(null, existingUser);
      }
      const user = await new User({
        facebookID: profile.id,
        name: profile.displayName
      }).save();
      done(null, user);
    }
  )
);
