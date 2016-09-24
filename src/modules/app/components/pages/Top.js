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
    const { dispatch, params } = this.props;

    Api.fetchJSON('api/events/top/3').then((response) => {

      console.log(response);
      //dispatch(EventActions.set(response));
    });
  }

  render() {

    return (
      <div className="test">
        <Header />
        <TwoColumn >

        </TwoColumn>
      </div>
    );
  }
}
