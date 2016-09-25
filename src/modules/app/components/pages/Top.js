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

    Api.fetchJSON('api/events/top/' + params.days).then((response) => {
      dispatch(EventActions.setTop(response));
    });
  }

  render() {

    const { event } = this.props;

    return (
      <div className="test">
        <Header />
        <TwoColumn >
          {
            event.topItems.map((item, key) => {
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
