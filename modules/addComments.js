"use strict";

let {commentModel} = require("./CommentsMatcher")



async function createComment(req, res) {
  let { eventID, Comment, user, email } = req.body;

  await commentModel.create({ eventID, Comment, user, email });

  commentModel.find({ eventID }, function (error, results) {
    error ? console.log("error in getting data", error) : res.send(results);
  });
}

module.exports = createComment;