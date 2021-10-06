
// "use strict";

// let {commentModel} = require("./CommentsMatcher");

// async function deleteComment(req, res) {
//   let { commentId, eventID } = req.body;
//   commentModel.deleteOne({ _id : commentId }, (error, deletedData) => {
//     error
//       ? console.log("error in deleting")
//       : commentModel.find({ eventID }, function (error2, results) {
//           error2
//             ? console.log("error in getting data", error2)
//             : res.send(results);
//         });
//   });
// }

// module.exports = deleteComment;