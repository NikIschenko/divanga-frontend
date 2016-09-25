import React from 'react';
import { Link } from 'react-router';
import Header from '../elements/Header';
import TwoColumn from '../layout/TwoColumn';

import './../../media/styles/index.scss';
import Api from '../../../../system/Api';
import { Event } from '../../../event/components/elements/Event';
import EventActions from '../../../event/actions/event';

export default class Detail extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;

    const response =  {
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Ставлю бутылку водки что ребята а именно Денис Антоха и Колян победят",
        views: 128,
      };
    dispatch(EventActions.setDetail(response))
  }

  render() {

    const predictions = [
      {
        id: 1,
        title: "",
        eventStart: "",
        eventEnd: "",
        answers: [{title: "", answersCount: 323}]
      },
      {},
      {},
    ];

    const { detailEvent } = this.props.event;

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
                { detailEvent.create_date}
              </div>
              <div className="column">
                <span>просмотров { detailEvent.views}</span>
              </div>
            </div>
          </div>

          <div className="predictions">

          </div>
        </TwoColumn>
      </div>
    );
  }
}
