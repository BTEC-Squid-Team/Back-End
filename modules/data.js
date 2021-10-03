const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  type: String,
  datetime_utc: String,
  url: String,
  city: String,
  name: String,
  short_title: String,
  image: String,
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


async function addEvent(req, res) {
  //   console.log(1111111111,req.body)
  let { type, datetime_utc, url, city,name, short_title,image} = req.body;

  await eventModel.create({
    type: type,
    datetime_utc: datetime_utc,
    url: url,
    city: city,
    name: name,
    short_title: short_title,
    image: image
  });

  eventModel.find({ datetime_utc: datetime_utc }, function (error, eventData) {
    if (error) {
      console.log("error in getting data", error);
    } else {
      //   console.log(22222222222,emailData)
      res.send(eventData);
    }
  });
}

module.exports={
    addEvent,
}