const passport = require("passport");
const keys = require("../config/keys");
const db = keys.postgresDB;
const host = keys.postgresHost;
const password = keys.postgresPassword;
const user = keys.postgresUser;
const uri = keys.postgresConnectionString;

const Pool = require("pg").Pool;
const pool = new Pool({
  user: user,
  host: host,
  database: db,
  password: password,
  port: 5432,
  connectionString: uri,
  ssl: true
});

//Insert Requests
const postListing = (req, res) => {
  const {
    name,
    phone,
    venue,
    address1,
    address2,
    postalCode,
    region,
    city,
    email,
    price,
    guest,
    studioName,
    studioImage,
    studioType
  } = req.body;
  pool.query(
    "Insert into studios (user_fk, contact_name, contact_phone, studio_venue, address1, address2, postal_code, city, contact_email, studio_name, guest_allowed, studio_price, studio_type_fk, main_image, state) values($1, $2 , $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)",
    [
      req.user._id,
      name,
      phone,
      venue,
      address1,
      address2,
      postalCode,
      city,
      email,
      studioName,
      guest,
      price,
      studioType,
      studioImage,
      region
    ],
    (error, results) => {
      if (error) {
        throw error;
      }

      pool.query(
        "Select _id from studios where user_fk = $1 and studio_venue=$2 and address1=$3 and studio_name=$4 and studio_type_fk = $5 and main_image=$6",
        [req.user._id, venue, address1, studioName, studioType, studioImage],
        (error, results) => {
          if (error) {
            throw error;
          }
          res.status(200).json(results.rows);
        }
      );
    }
  );
};



//Get Requests
const getStudioType = (request, response) => {
  pool.query("Select * from studiotypes", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getStudios = (request, response) => {
  pool.query(
    "Select s.*, studio_type from studios s join studiotypes st on st._id = s.studio_type_fk",
    (error, results) => {
      if (error) {
        throw error;
      }

      response.status(200).json(results.rows);
    }
  );
};




//put requests
const putStudioDetails = (req, res) => {
  const {
    capacity,
    equipment,
    services,
    description,
    studioname,
    studioid,
    include,
    dates
  } = req.body;

  pool.query(
    "Update Studios set description=$2, includes=$3, services=$4,  equipment=$5 , guest_allowed=$6, availibility=$7 where _id=$1 ",
    [studioid, description, include, services, equipment, capacity, dates],
    (error, results) => {
      if (error) {
        throw error;
      }
     
      if(dates){

      }
     
      res.status(200).json("Details Added Successfully");
    }
    
  );
};


const putStudioInfo = (req, res) => {
  const {
    name,
    phone,
    venue,
    address1,
    address2,
    postalCode,
    region,
    city,
    email,
    price,
    guest,
    studioName,
    studioImage,
    studioType, 
    studioid
  } = req.body;
  console.log(req.body)
  pool.query(
    "Update studios set contact_name =$2, contact_phone=$3, studio_venue=$4, address1=$5, address2=$6, postal_code=$7, city=$8, contact_email=$9, studio_name=$10, guest_allowed=$11, studio_price=$12, studio_type_fk=$13, main_image=$14, state=$15 where _id=$16 and user_fk=$1" ,
    [
      req.user._id,
      name,
      phone,
      venue,
      address1,
      address2,
      postalCode,
      city,
      email,
      studioName,
      guest,
      price,
      studioType,
      studioImage,
      region,
      studioid
    ],
    (error, results) => {
      if (error) {
        throw error;
      }

      pool.query(
        "Select _id from studios where user_fk = $1 and studio_venue=$2 and address1=$3 and studio_name=$4 and studio_type_fk = $5 and main_image=$6",
        [req.user._id, venue, address1, studioName, studioType, studioImage],
        (error, results) => {
          if (error) {
            throw error;
          }
          res.status(200).json(results.rows);
        }
      );
    }
  );
};

const putImages = (req, res) => {
  const { studioid, studioname, studioImageSecondary } = req.body;
  pool.query(
    "Update studios set studio_images = $3 where user_fk =$1 and _id=$2 ",
    [req.user._id, studioid, studioImageSecondary],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Image Inserted Successfully");
    }
  );
};

const updateUser = (req, res) => {
  const {username, email, social, userid } = req.body;
  console.log(userid, social)
  pool.query(
    "Update users set social = $2 where _id=$1",
    [userid, social,],
    (error, results) => {
      if (error) {
        throw error;
      }
     
      res.status(200).json("User Info Updated");
    }
  );
};


//delete
const putRemoveImages = (req, res) => {
  const { studioid,  studioImageSecondary } = req.body;
  pool.query(
    "Update studios set studio_images = $3 where user_fk =$1 and _id=$2 ",
    [req.user._id, studioid, studioImageSecondary],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Image Removed Successfully");
    }
  );
};


module.exports = {
  //post
  postListing,
  //get
  getStudioType,
  getStudios,
  //put
  putImages,
  putStudioDetails,
  putStudioInfo,
  putRemoveImages,
  updateUser,
  //delete

};
