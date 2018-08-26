import React from "react";
import { connect } from "react-redux";
import { logOutAction } from "../state/auth";
import {
  onEmailLoginChangeAction,
  onPasswordLoginChangeAction,
  onLogInClickAction
} from "../state/logInAuth";
import {
  onEmailSignUpChangeAction,
  onPasswordSignUpChangeAction,
  onSignUpClickAction
} from "../state/signUpAuth";

import { onLogInByGoogleClickHandler } from "../state/logInGoogleAuth";

import RaisedButton from "material-ui/RaisedButton";
import EmailAndPasswordForm from "./EmailAndPasswordForm";
import PaperRefined from "../components/PaperRefined";

const styles = {
  margin: "20px,40px,20px, 40px",
  padding: "50px"
};

const styleContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

const textJustify = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center"
};
const Auth = props =>
  props._user ? (
    <div>
      <RaisedButton
        className="logout-button"
        label="Logout"
        primary={true}
        onClick={props._logOutAction}
      />
      {props.children}
    </div>
  ) : (
    <div style={styleContainer}>
      <div style={styles}>
        <PaperRefined>
          <h1 style={textJustify}> SURVEYS APP </h1>
        </PaperRefined>
        <EmailAndPasswordForm
          style={textJustify}
          onClickAction={props._onLogInClickAction}
          onPasswordChangeAction={props._onPasswordLoginChangeAction}
          onEmailChangeAction={props._onEmailLoginChangeAction}
          passwordValue={props._passwordLogin}
          emailValue={props._emailLogin}
          errorTextPassword={props._errorTextPasswordLogin}
          errorTextEmail={props._errorTextEmailLogin}
          label={"Login"}
        />
        <PaperRefined>
          <h1>Login by Google</h1>
          <RaisedButton
            label="Login"
            primary={true}
            onClick={props._onLogInByGoogleClickHandler}
            style={textJustify}
          />
        </PaperRefined>
        <div>
          <EmailAndPasswordForm
            onClickAction={props._onSignUpClickAction}
            onPasswordChangeAction={props._onPasswordSignUpChangeAction}
            onEmailChangeAction={props._onEmailSignUpChangeAction}
            passwordValue={props._passwordSignUp}
            emailValue={props._emailSignUp}
            errorTextPassword={props._errorTextPasswordSignUp}
            errorTextEmail={props._errorTextEmailSignUp}
            label={"Sign Up"}
          />
        </div>
      </div>
    </div>
  );

const mapStateToProps = state => ({
  _user: state.auth.user,

  _emailLogin: state.logInAuth.emailLogin,
  _passwordLogin: state.logInAuth.passwordLogin,
  _errorTextPasswordLogin: state.logInAuth.errorTextPasswordLogin,
  _errorTextEmailLogin: state.logInAuth.errorTextEmailLogin,

  _emailSignUp: state.signUpAuth.emailSignUp,
  _passwordSignUp: state.signUpAuth.passwordSignUp,
  _errorTextEmailSignUp: state.signUpAuth.errorTextEmailSignUp,
  _errorTextPasswordSignUp: state.signUpAuth.errorTextPasswordSignUp
});

const mapDispatchToState = dispatch => ({
  _logOutAction: () => dispatch(logOutAction()),

  _onEmailLoginChangeAction: event =>
    dispatch(onEmailLoginChangeAction(event.target.value)),
  _onPasswordLoginChangeAction: event =>
    dispatch(onPasswordLoginChangeAction(event.target.value)),
  _onLogInClickAction: () => dispatch(onLogInClickAction()),

  _onEmailSignUpChangeAction: event =>
    dispatch(onEmailSignUpChangeAction(event.target.value)),
  _onPasswordSignUpChangeAction: event =>
    dispatch(onPasswordSignUpChangeAction(event.target.value)),
  _onSignUpClickAction: () => dispatch(onSignUpClickAction()),

  _onLogInByGoogleClickHandler: () => dispatch(onLogInByGoogleClickHandler())
});

export default connect(
  mapStateToProps,
  mapDispatchToState
)(Auth);
