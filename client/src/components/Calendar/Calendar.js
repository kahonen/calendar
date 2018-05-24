import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { TextField, Dialog, Button } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.handleSubmitBtn();
    this.setState({ open: false });
  };

  handleExit = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="container">
        <BigCalendar
          selectable
          events={this.props.events}
          views={["month", "day", "week"]}
          defaultView="month"
          style={{ height: "100vh" }}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => alert("Event Name: " + event.title  + "\nStart Day: " + event.start + "\nEnd Day: " + event.end)}
          onSelectSlot={this.handleClickOpen}
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Add an event to your schedule"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextField
                id="event"
                label="Event Name"
                type="text"
                margin="normal"
                onChange={this.props.handleInputChange}
                value={this.props.title}
              />
              <br />
              <TextField
                id="startTime"
                label="Start Time"
                type="datetime-local"
                onChange={this.props.handleInputStart}
                value={this.props.start}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300
                }}
              />
              <br />
              <TextField
                id="endTime"
                label="End Time"
                type="datetime-local"
                onChange={this.props.handleInputEnd}
                value={this.props.end}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300
                }}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={this.handleExit} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Add Event
            </Button>
          </DialogActions>
        </Dialog>
        </div>
        );
      }
  }


export default Calendar;
