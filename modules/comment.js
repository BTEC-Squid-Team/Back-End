const mongoose = require("mongoose"); 

const eventSchema = new mongoose.Schema({
    
    Comment: String,
    city: String
  });
  
  const eventModel = mongoose.model("comment", eventSchema);


  function getCommentHandler(req, res) {

    let city = req.query.city;
    
    eventModel.find({ city: city }, function (error, eventData) {
      if (error) {
        console.log("error in getting data", error);
      } else {
        // console.log(bookData)
        res.send(eventData);
      }
    });
  }
  

  async function addComment(req, res) {
      console.log(1111111111,req.body)
    let { Comment, city } = req.body;
  
        console.log(11111111111111111,req.body)
  
    await eventModel.create({
        Comment:Comment,
        city: city
    });
  
    eventModel.find({ city: city }, function (error, eventlData) {
      if (error) {
        console.log("error in getting data", error);
      } else {
          console.log(22222222222,eventlData)
        res.send(eventlData);
      }
    });
  }
  

  function deleteComment(req, res) {
    let commentID = req.query.commentID;
  
    eventModel.deleteOne({ _id: commentID }).then(() => {
        eventModel.find({ commentID: commentID }, function (error, eventIDData) {
        if (error) {
          console.log("error in getting data", error);
        } else {
          // console.log(bookIDData)
          res.send(eventIDData);
        }
      });
    });
  }
  

  function updateComment(req , res){
    // console.log(1255298,req.body)
    let {  Comment,city} = req.body;
    let commentID = req.query.commentID;
  console.log(commentID)
    eventModel.findByIdAndUpdate(commentID,{Comment,city} , (error,updatedData) => {
      if(error){console.log('error in updating')}
      else{
        console.log('updatedData', updatedData);
        eventModel.find({ city: city }, function (error,emailData) {
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
    getCommentHandler,
    addComment,
    deleteComment,
    updateComment
  }
