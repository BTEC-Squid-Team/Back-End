const mongoose = require("mongoose"); 


const eventSchema = new mongoose.Schema({
    bioData: String,
   
    email: String
  });

  const bioModel = mongoose.model("Bio", eventSchema);

function getBioHandler(req, res) {

    let email = req.query.email;
  
    bioModel.find({ email: email }, function (error, eventData) {
      if (error) {
        console.log("error in getting data", error);
      } else {
        // console.log(bookData)
        res.send(eventData);
      }
    });
  }


  
async function addBio(req, res) {
    //   console.log(1111111111,req.body)
    let { bioData , email} = req.body;
  
        console.log(11111111111111111,req.body)
  
    await bioModel.create({
        bioData :  bioData,
         email : email
    });
  
    bioModel.find({ email: email }, function (error, bioData) {
      if (error) {
        console.log("error in getting data", error);
      } else {
          console.log(22222222222,bioData)
        res.send(bioData);
      }
    });
  }

  function updateBio(req , res){
    console.log(1255298,req.body)
    let { bioData , email , bioID} = req.body;
    
  
    bioModel.findByIdAndUpdate(bioID , {bioData, email} , (error,updatedData) => {
      if(error){console.log('error in updating')}
      else{
        console.log('updatedData', updatedData);
        bioModel.find({ email: email }, function (error,emailData) {
          if (error) {
            console.log("error in getting data", error);
          } else {
          //   console.log(22222222222,emailData)
            res.send(emailData);
          }
        });
      }
    })
  }

  
module.exports={
    getBioHandler,
    addBio,
    updateBio
     
  }