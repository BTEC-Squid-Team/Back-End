// "use strict";

// const mongoose = require("mongoose");

// const eventSchema = new mongoose.Schema({
//   Comment: String,
//   eventID: String,
//   user:String,
//   email:String,

// });

// const commentModel = mongoose.model("comment", eventSchema);

// function seedSomeComments() {
//     const game1 = new commentModel({
//         eventID: 5439228,
//         Comment: "cool",
//       user: "Emad",
//       email: "emadzxy7@gmail.com",
//     });
//     const game2 = new commentModel({
//         eventID: 5439230,
//         Comment: "cool",
//       user: "Mohammad",
//       email: "emadzxy7@gmail.com",
//     });
//     const game3 = new commentModel({
//         eventID: 5439228,
//         Comment: "cool22",
//       user: "Munes",
//       email: "emadzxy7@gmail.com",
//     });
  
//     // game1.save();
//     // game2.save();
//     // game3.save();
//     // console.log(
//     //   "DONE SEEDEING! .. please comment me and restart the server .. im in ./Schemas/GenralComments line:40"
//     // );
//   }
  
// //   seedSomeComments();





// function commentsMatcher(data) {
//   let newData = [];
//   commentModel.find({}, function (error, results) {
//     if (error) {
//       console.log("error in getting data", error);
//     } else {
//       console.log("done in my side");
//       data.map((item) => {
//         results.map((comment) => {
//           item.id == comment.eventID
//             ? Array.isArray(item.comments)
//               ? item.comments.push(comment)
//               : (item.comments = [comment])
//             : "";
//         });
//         item.comments ? "" : (item.comments = []);
//         newData.push(item);
//       });
//     }
//   });
//   return newData;
// }

// module.exports= {

//     commentsMatcher,
//     commentModel,

// }