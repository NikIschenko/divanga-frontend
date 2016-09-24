import React from 'react';
import { Link } from 'react-router';
import Header from '../elements/Header';
import TwoColumn from '../layout/TwoColumn';

import './../../media/styles/index.scss';
import Api from '../../../../system/Api';
import { Event } from '../../../event/components/elements/Event';
import EventActions from '../../../event/actions/event';

export default class Index extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;

    // var json = JSON.stringify({
    //     username: "admin",
    //     password: "admin"
    //   });

    // Api.sendPost('api/authenticate', {
    //   username: "admin",
    //   password: "admin"
    // }).then((response) => {
    //   console.log(response);
    //   dispatch()
    // });

    // Api.fetchJSON('api/events', {
    //   page: 1,
    //   size: 20,
    // }).then((response) => {
    //   dispatch(EventActions.set(response));
    // });

    const response = [
      {
        id: 1,
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Ставлю бутылку водки что ребята а именно Денис Антоха и Колян победят",
        views: 128,
      },
      {
        id: 1,
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Ставлю бутылку водки что ребята а именно Денис Антоха и Колян победят",
        views: 128,
      },
      {
        id: 1,
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Ставлю бутылку водки что ребята а именно Денис Антоха и Колян победят",
        views: 128,
      },
      {
        id: 1,
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Ставлю бутылку водки что ребята а именно Денис Антоха и Колян победят",
        views: 128,
      },
      {
        id: 1,
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Ставлю бутылку водки что ребята а именно Денис Антоха и Колян победят",
        views: 128,
      }
    ];
    dispatch(EventActions.setMain(response))
  }

  render() {

    const { mainItems } = this.props.event;

    return (
      <div className="test">
        <Header />
        <TwoColumn >
          {
            mainItems.map((item, key) => {
              return (
                <Event route={true} key={key} event={item} />
              );
            })
          }
        </TwoColumn>
      </div>
    );
  }
}
