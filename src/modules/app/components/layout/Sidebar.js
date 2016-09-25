import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { SidebarData } from '../../data/index'
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

    const response = SidebarData;
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
              <Event route={true} actions={false} key={key} event={item} />
            );
          })
        }
      </aside>
    );
  }
}

export default Sidebar;
