const axios = require('axios');

// async
 function getEvents (request, response){

console.log(request.query,"hhhhhhhhhhhhhhhhh");

  const {city} = request.query;

  const eventLink = `https://api.seatgeek.com/2/events?client_id=MjM3MTMyMTJ8MTYzMzI1ODU0OS44MDMyMjg2&venue.city=${city}`
console.log(eventLink);
// await
   let result =  axios.get(eventLink);
   console.log(result);
   response.send(result.data);
}

module.exports = getEvents;