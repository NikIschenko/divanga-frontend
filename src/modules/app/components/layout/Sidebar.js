import React, { Component, PropTypes } from 'react';
import { Link }        from 'react-router';
import { DropdownButton } from 'react-bootstrap';
import { SidebarData, tagsCloud } from '../../data/index'
import Api             from '../../../../system/Api';
import EventActions    from '../../../event/actions/event';
import { EventSimple }       from '../../../event/components/elements/EventSimple';


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
        <div className="block">
          <div className="block-header border-b">
            <h3 className="title">Актуальные тренды</h3>
          </div>
          <div className="block-content">
            <div className="tags-cloud">

              {
                tagsCloud.map((tag, key) => {
                  return (
                    <Link key={key} to={tag.url}>#{tag.title}<small>{tag.count} публикаций</small></Link>
                  );
                })
              }
            </div>
          </div>
        </div>

        <div className="block">
          <div className="block-header border-b">
            <ul className="nav nav-inline">
              <li className="nav-item">
                <h3 className="title">Топ новостей</h3>
              </li>
              <li className="nav-item options">
                <DropdownButton
                  className="more"
                  id="dropdown-sidebar-more"
                >
                  <Link to="">За последние 3 дня</Link>
                  <Link to="/invite">За неделю</Link>
                  <Link to="/logout">За месяц</Link>
                  <Link to="/logout">За все время</Link>
                </DropdownButton>
              </li>
            </ul>
          </div>
          <div className="block-content">
            {
              popularItems.map((item, key) => {
                return (
                  <EventSimple key={key} event={item} />
                );
              })
            }
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
