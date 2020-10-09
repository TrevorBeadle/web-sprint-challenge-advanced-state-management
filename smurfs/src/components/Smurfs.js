import React from "react";
import { connect } from "react-redux";
import { Smurf } from "./Smurf";

const Smurfs = props => {
  return (
    <section className="smurfs">
      {props.smurfs.map(smurf => {
        return <Smurf smurf={smurf} />;
      })}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {})(Smurfs);
