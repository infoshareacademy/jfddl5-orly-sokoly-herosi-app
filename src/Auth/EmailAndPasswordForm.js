import React from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PaperRefined from "../components/PaperRefined";

const textJustify = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center"
};

const EmailAndPasswordForm = props => (
  <div>
    <PaperRefined>
      <h1 style={textJustify}>{props.label}</h1>
      <div>
        <TextField
          floatingLabelText="E-mail"
          value={props.emailValue}
          type={"email"}
          errorText={props.errorTextEmail}
          onChange={props.onEmailChangeAction}
        />
      </div>
      <div>
        <TextField
          floatingLabelText="Password"
          value={props.passwordValue}
          type={"password"}
          errorText={props.errorTextPassword}
          onChange={props.onPasswordChangeAction}
        />
      </div>
      <div>
        <RaisedButton
          label={props.label}
          primary={true}
          onClick={props.onClickAction}
          style={textJustify}
        />
      </div>
    </PaperRefined>
  </div>
);

export default EmailAndPasswordForm;
