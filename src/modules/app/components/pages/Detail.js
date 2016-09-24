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

    const { detailEvent } = this.props.event;

    return (
      <div className="test">
        <Header />
        <TwoColumn >
          {detailEvent.title}
        </TwoColumn>
      </div>
    );
  }
}
