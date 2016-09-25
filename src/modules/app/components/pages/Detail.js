import React from 'react';
import { Link } from 'react-router';
import Header from '../elements/Header';
import TwoColumn from '../layout/TwoColumn';

import { mainData } from '../../data/index';
import './../../media/styles/index.scss';
import RadioList from '../elements/RadioList';
import Api from '../../../../system/Api';
import { Event } from '../../../event/components/elements/Event';
import EventActions from '../../../event/actions/event';



export default class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentRadioListCheck: 1, toggleOn: 1 }
  };

  componentWillMount() {
    const { dispatch, params } = this.props;

    const response =  mainData[params.id - 1];
    dispatch(EventActions.setDetail(response))
  }

  checkRadioList = (value) => {
    this.setState({ currentRadioListCheck: value});
  };

  render() {

    const predictions = [
      {
        id: 1,
        title: "Вопрос номер 1",
        eventStart: "",
        eventEnd: "",
        answers: [{title: "", answersCount: 323}]
      },
      {
        id: 2,
        title: "Вопрос номер 2",
        eventStart: "",
        eventEnd: "",
        answers: [{title: "", answersCount: 123}]
      },
      {
        id: 3,
        title: "Вопрос номер 3",
        eventStart: "",
        eventEnd: "",
        answers: [{title: "", answersCount: 112}]
      },
      {
        id: 4,
        title: "Вопрос номер 4",
        eventStart: "",
        eventEnd: "",
        answers: [{title: "", answersCount: 441}]
      },
    ];

    const { detailEvent } = this.props.event;
    var predictionList = [];

    predictions.map((prediction, index) => {
      predictionList.push({
        label: prediction.title,
        value: prediction.id
      });
    });

    return (
      <div className="test">
        <Header />
        <TwoColumn >
          <div className="event">
            <h3>
              {detailEvent.title}
            </h3>
            <div className="text" dangerouslySetInnerHTML={{__html: detailEvent.text}}></div>
            <div className="row actions">
              <div className="column">
                <dl className="date">
                  <dt>{ detailEvent.createDate}</dt>
                  <dd>добавлено</dd>
                </dl>
              </div>
              <div className="column text-right">
                <dl className="views">
                  <dt><i className="si-eye si"></i>{ detailEvent.viewsCount}</dt>
                  <dd>просмотров</dd>
                </dl>
              </div>
            </div>
            <div className="predictions">
              <RadioList
                radios={predictionList}
                checked={this.state.currentRadioListCheck}
                check={ this.checkRadioList }
              />
            </div>
          </div>

        </TwoColumn>
      </div>
    );
  }
}
