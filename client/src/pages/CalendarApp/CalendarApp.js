import React, { Component } from "react";
import Calendar from "../../components/Calendar";
import API from "../../utils/API"
import "react-big-calendar/lib/css/react-big-calendar.css";

export default class CalendarApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      title: "",
      start: "",
      end: ""
    };
  }

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res => {
        console.log(res.data);
        this.setState({ events: res.data });
      })
      .catch(err => console.log(err));
  };

  addEvent = events => {
    API.addEvent({
      title: this.state.title,
      start: this.state.start,
      end: this.state.end
    })
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleInputStart = event => {
    this.setState({
      start: event.target.value
    });
  };

  handleInputEnd = event => {
    this.setState({
      end: event.target.value
    });
  };

  handleSubmitBtn = event => {
    let events = JSON.parse(JSON.stringify(this.state.events));
    events.push({
      title: this.state.title,
      start: this.state.start,
      end: this.state.end
    });
    console.log(events);
    this.addEvent(events);
  };


  render() {
    return (
          <Calendar
            events={this.state.events}
            addEvent={this.addEvent}
            title={this.state.title}
            start={this.state.start}
            end={this.state.end}
            handleInputChange={this.handleInputChange}
            handleInputStart={this.handleInputStart}
            handleInputEnd={this.handleInputEnd}
            handleSubmitBtn={this.handleSubmitBtn}
          />
    );
  }
}
