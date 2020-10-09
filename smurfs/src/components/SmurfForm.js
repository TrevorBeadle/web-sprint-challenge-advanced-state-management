import React, { useState } from "react";
import { postSmurfs } from "../actions";
import { connect } from "react-redux";

const initialForm = {
  name: "",
  age: "",
  height: "",
};

const SmurfForm = props => {
  const [values, setValues] = useState(initialForm);

  const postSmurfs = e => {
    e.preventDefault();
    props.postSmurfs(values);
    setValues(initialForm);
  };

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={postSmurfs}>
      <h3>Add a Smurf!</h3>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={onChange}
      />

      <label htmlFor="age">Age: </label>
      <input
        type="number"
        id="age"
        name="age"
        value={values.age}
        onChange={onChange}
      />

      <label htmlFor="height">Height: </label>
      <input
        type="text"
        id="height"
        name="height"
        value={values.height}
        onChange={onChange}
      />
      <button>Add</button>
      {props.error ? `${props.error}` : ""}
    </form>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);
