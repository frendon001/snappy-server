import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurvey() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card blue-grey lighten-5" key={survey._id}>
          <div className="card-content ">
            <span className="card-title">{survey.title}</span>

            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a className="orange-text text-accent-3">Yes: {survey.yes}</a>
            <a className="orange-text text-accent-3">No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row top-s-margin">
        <div className="col s12 m12">{this.renderSurvey()} </div>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
