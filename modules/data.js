const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  type: String,
  datetime_utc: String,
  url: String,
  city: String,
  name: String,
  short_title: String,
  image: String,
  email: String
});

const eventModel = mongoose.model("event", eventSchema);

function seedCatInformation() {
    const events = new eventModel({
        type: "java",
        datetime_utc: "about java",
        url: "java",
        city: "leenkaraja24@gmail.com",
        name : "anyEvents",
        short_title : "anything",
        image: "url",
    
    });
    // events.save();
}
// seedCatInformation();

function getEventHandler(req, res) {

  let email = req.query.email;

  eventModel.find({ email: email }, function (error, eventData) {
    if (error) {
      console.log("error in getting data", error);
    } else {
      // console.log(bookData)
      res.send(eventData);
    }
  });
}



async function addEvent(req, res) {
  //   console.log(1111111111,req.body)
  let { type, datetime_utc, url, city,name, short_title,image , email} = req.body;

      console.log(11111111111111111,req.body)

  await eventModel.create({
    type: type,
    datetime_utc: datetime_utc,
    url: url,
    city: city,
    name: name,
    short_title: short_title,
    image: image,
    email: email
  });

  eventModel.find({ email: email }, function (error, emailData) {
    if (error) {
      console.log("error in getting data", error);
    } else {
        console.log(22222222222,emailData)
      res.send(emailData);
    }
  });
}

function deleteHandler(req, res) {
  let eventID = req.query.eventID;

  eventModel.deleteOne({_id: eventID }).then(() => {
    eventModel.find({ eventID: eventID }, function (error, eventIDData) {
      if (error) {
        console.log("error in getting data", error);
      } else {
        // console.log(bookIDData)
        res.send(eventIDData);
      }
    });
  });
}



module.exports={
  getEventHandler,
    addEvent,
    deleteHandler
}