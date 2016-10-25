import React from 'react';
import {Link} from 'react-router';
import Header from '../../containers/elements/Header';
import TwoColumn from '../layout/TwoColumn';

import {mainData, questions, comments } from '../../data/index';
import './../../media/styles/index.scss';
import RadioList from '../elements/RadioList';
import Api from '../../../../system/Api';
import {Event} from '../../../event/components/elements/Event';
import EventActions from '../../../event/actions/event';


export default class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentRadioListCheck: 1, toggleOn: 1}
  };

  componentWillMount() {
    const {dispatch, params} = this.props;

    const response = mainData[params.id - 1];
    dispatch(EventActions.setDetail(response))
  }

  checkRadioList = (value) => {
    this.setState({currentRadioListCheck: value});
  };

  render() {

    const {detailEvent} = this.props.event;
    var predictionList = [];

    questions.answers.map((prediction, index) => {
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
              <strong className="question">{questions.title}</strong>
              <RadioList
                radios={predictionList}
                checked={this.state.currentRadioListCheck}
                check={ this.checkRadioList }
              />
            </div>
          </div>

          <div className="comments">
            <strong>Обсуждение</strong>
            {
              (comments.map((comment, key) => {

                return (
                  <div key={key} className="comment">
                    <div className="row">
                      <div className="image columns shrink">
                        <img src={comment.user.image} />
                      </div>
                      <div className="columns text">
                        <dl>
                          <dt>{comment.user.name}, <span className="date">{comment.createDate}</span></dt>
                          <dd>{comment.comment}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                )
              }))
            }
          </div>
        </TwoColumn>
      </div>
    );
  }
}
