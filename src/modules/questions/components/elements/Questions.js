import React from 'react';
import moment from 'moment';
import { RadioList } from '../../../app';

export default class Questions extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      currentRadioListCheck: 1,
      toggleOn: 1
    }
  };

  checkRadioList = (value) => {
    this.setState({currentRadioListCheck: value});
  };

  render() {

    const { questions } = this.props;

    console.log(questions);

    return (

      <div className="questions">
        <strong className="block-title">Ваше мнение</strong>
        {
          (questions.map((question, key) => {

            return (
              <div key={key} className="question-block">
                <div className="title">{question.title}</div>
                <div className="timeline">
                  <div className="timeline-bar">
                    <span className="timeline-progress finish-70" />
                  </div>
                  <span className="date-start">
                    <i>Начало:</i>
                    {moment(question.eventStart).format('dddd, h:mm')}
                  </span>
                  <span className="date-end">
                    <i>Завершение голосования:</i>
                    {moment(question.eventEnd).format('dddd, h:mm')}
                  </span>
                </div>
                <div className="predictions">
                  {
                    <RadioList
                      radios={question.predictions.map((prediction) => ({ value: prediction.id, label: prediction.text }))}
                      checked={this.state.currentRadioListCheck}
                      check={ this.checkRadioList }
                    />
                  }
                </div>
                <div className="actions">
                  <button className="btn btn-primary">Голосовать</button>
                </div>
              </div>
            )
          }))
        }
      </div>
    );
  }
}