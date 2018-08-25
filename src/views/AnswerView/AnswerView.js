import React from "react";

import OSHPaper from "../../components/OSHPaper";
import SurveyList from "../../components/SurveyList";
import Loading from "../../components/Loading";

import { connect } from "react-redux";

const AnswerView = props => {
  return (
    <OSHPaper>
      <div className="answers-view">
        <h1 className="answer__view">Answers view</h1>
      </div>
    </OSHPaper>
  );
};

const mapStateToProps = state => ({});

const mapStateToDispatch = dispatch => ({});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AnswerView);
