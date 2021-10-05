const axios = require('axios');

const {commentsMatcher} = require('./CommentsMatcher')

async function getEvents (request, response){

// console.log(request.query,"hhhhhhhhhhhhhhhhh");

  const {city} = request.query;

  const eventLink = `https://api.seatgeek.com/2/events?client_id=${process.env.ID}&venue.city=${city}`
// console.log(eventLink);

   axios.get(eventLink).then(result => {
    // console.log(result.data.events);

    let eventDat = result.data.events.map(info => 
                     new EventData(info)
                    
                   );
                   let filtredData = commentsMatcher(eventDat);
                   setTimeout(() => {
                    response.send(filtredData);
                   }, 300);
    //  response.send(eventDat);
   })
   .catch(error => {
            response.send(error)
           })


}
// http://localhost:3001/event?city=paris
class EventData{
    constructor(data){
        this.type = data.type;
        this.id = data.id;
        this.datetime_utc = data.datetime_utc;
        this.url = data.venue.url;
        this.city = data.venue.city;
        this.name = data.venue.name;
        this.short_title = data.short_title;
        this.image = data.performers[0].images.huge;
    }
}
module.exports = getEvents;