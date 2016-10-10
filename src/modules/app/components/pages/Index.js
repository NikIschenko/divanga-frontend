import React from 'react';
import Header from '../elements/Header';
import ThreeColumn from '../layout/ThreeColumn';

import { mainData } from '../../data/index';
import './../../media/styles/index.scss';
import { Event } from '../../../event/components/elements/Event';
import EventActions from '../../../event/actions/event';

export default class Index extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;

    // Api.fetchJSON('api/events', {
    //   page: 1,
    //   size: 20,
    // }).then((response) => {
    //   dispatch(EventActions.set(response));
    // });

    const response = mainData;
    dispatch(EventActions.setMain(response))
  }

  render() {

    const { mainItems } = this.props.event;

    return (
      <div>
        <Header />
        <ThreeColumn>
          <div className="block-header"><h1 className="title">Топ событий</h1></div>
          {
            mainItems.map((item, key) => {
              return (
                <Event route={true} key={key} event={item} />
              );
            })
          }
        </ThreeColumn>
      </div>
    );
  }
}
