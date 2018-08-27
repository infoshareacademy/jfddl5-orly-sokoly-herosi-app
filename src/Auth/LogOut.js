import React from "react";
import { Link } from "react-router-dom";
// Redux & state
import { connect } from "react-redux";
import { logOut } from "../state/auth";
// UI
import { FlatButton } from "material-ui";

const LogOut = props => (
  <Link to={"/"}>
    <FlatButton
      label="Log out"
      labelStyle={{ color: "white" }}
      labelPosition="before"
      onClick={props.onLogOutClick}
    />
  </Link>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onLogOutClick: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
