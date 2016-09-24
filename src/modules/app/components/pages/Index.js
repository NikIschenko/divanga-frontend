import React from 'react';
import { Link } from 'react-router';
import Header from '../elements/Header';
import OneColumn from '../layout/OneColumn';
import './../../media/styles/index.scss';
import Api from '../../../../system/Api';
import { Event } from '../../../event/components/elements/Event';

export default class Index extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;

    var json = JSON.stringify({
        username: "admin",
        password: "admin"
      });

    Api.sendPost('api/authenticate', {
      username: "admin",
      password: "admin"
    }).then((response) => {
      console.log(response);
    });

    Api.fetchJSON('api/events', {
      page: 1,
      size: 20,
    }).then((response) => {
      console.log(response)
    });
  }

  render() {
    return (
      <div className="test">
        <Header />
        <OneColumn>
          <Event event={null} />
        </OneColumn>
      </div>
    );
  }
}
