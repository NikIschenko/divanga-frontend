import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Api from '../../../../system/Api';
import { Event } from '../../../event/components/elements/Event';
import EventActions from '../../../event/actions/event';

class Sidebar extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    // Api.fetchJSON('api/events', {
    //   page: 1,
    //   size: 20,
    //   sort: 'views_count'
    // }).then((response) => {
    //   dispatch(EventActions.setPopular(response));
    // });

    const response = [
      {
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Ставлю бутылку водки что ребята а именно Денис Антоха и Колян победят",
        views: 128,
      },
      {
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Ставлю бутылку водки что ребята а именно Денис Антоха и Колян победят",
        views: 128,
      },
    ];
    dispatch(EventActions.setPopular(response))
  }

  render() {

    const { popularItems } = this.props.event;

    return (
      <aside >
       <h3 className="section-title">Топ 10-лучших</h3>
        {
          popularItems.map((item, key) => {
            return (
              <Event route={true} key={key} event={item} />
            );
          })
        }
      </aside>
    );
  }
}

export default Sidebar;
