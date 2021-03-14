import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import addPerson from "../actions/addPerson";
import deletePerson from "../actions/deletePerson";

class Persons extends Component {
  personAddedHandle = () => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: "Max",
      age: Math.floor(Math.random() * 40),
    };
    this.props.addPerson(newPerson);
  };

  personDeletedHandle = (id) => {
    this.props.deletePerson(id);
  };

  render() {
    return (
      <div>
        <AddPerson
          personAdded={() => this.personAddedHandle(this.props.persons)}
        />
        {this.props.persons.map((person, id) => (
          <Person
            key={id}
            name={person.name}
            age={person.age}
            id={person.id}
            clicked={() => this.personDeletedHandle(id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addPerson: addPerson,
      deletePerson: deletePerson,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
