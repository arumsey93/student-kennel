import React, { Component } from "react";
import './Owner.css'

export default class OwnerForm extends Component {
  // Set initial state
  state = {
    name: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewOwner = evt => {
    evt.preventDefault();
      const owner = {
        name: this.state.ownerName,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        ownerId: parseInt(this.state.ownerId),
      };

      // Create the animal and redirect user to animal list
      this.props
        .addOwner(owner)
        .then(() => this.props.history.push("/owners"));
  };

  render() {
    return (
      <React.Fragment>
        <form className="ownerForm">
          <div className="form-group">
            <label htmlFor="ownerName">Owner name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerName"
              placeholder="Owner name"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewOwner}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}