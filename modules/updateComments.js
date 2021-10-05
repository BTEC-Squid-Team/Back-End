"use strict";

let {commentModel} = require("./CommentsMatcher");

async function updateComment(req, res) {
  let { commentId, Comment, eventID } = req.body;
  commentModel.findByIdAndUpdate(commentId, { Comment }, (error, updatedData) => {
    error
      ? console.log("error in updating")
      : commentModel.find({ eventID }, function (error2, results) {
          error2
            ? console.log("error in getting data", error2)
            : res.send(results);
        });
  });
}

module.exports = updateComment; 

