import axios from "axios";

export default {
  // Gets all events
  getEvents: () => axios.get("/api/event"),

  //Adds event to the database
  addEvent: eventData=> axios.post("/api/event",  eventData),

  //Gets event with given id
  getEvent: id => axios.get("/api/event",  id),
  
  //Deletes event with given id
  deleteEvent: id => axios.delete("/api/event",  id),

  //Updates event with given id
  updateEvent: id => axios.put("/api/event",  id),

};
