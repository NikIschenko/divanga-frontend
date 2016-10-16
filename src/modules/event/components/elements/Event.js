import React from 'react';
import moment from 'moment';
import {Link} from 'react-router';


export class Event extends React.Component {

  static defaultProps = {
    route: false,
    actions: true,
  }

  renderTitle() {
    const {event, route} = this.props;

    return (route)
      ? <h3><Link to={`/show/${event.id}`}>{event.title}</Link></h3>
      : <h3>{event.title}</h3>
  }

  render() {
    const {event, route, actions} = this.props;


    return (
      <div className="card event-card">
        <div className="card-block">
          <div className="card-title">
            {this.renderTitle()}
          </div>
          <div className="text" dangerouslySetInnerHTML={{__html: event.previewText}}></div>
        </div>
        <div className="card-footer row ">

          <div className="column col-xs-6">
            <span className="user">
              <i className="avatar" style={{backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png)'}}></i>
              <dl>
                <dd>{event.userLogin}</dd>
                <dt className="date">
                  {moment(event.createDate).startOf('hour').fromNow()}
                  , в {moment(event.createDate).format('H:MM')}
                </dt>
              </dl>
            </span>
          </div>

          <div className="column col-xs-6">
            <ul className="nav nav-inline">
              <li className="nav-item views">
                <span>
                  <i className="icon-eye icons"></i>
                  { event.viewsCount}
                </span>
              </li>
              <li className="nav-item">
                <div className="like-dislike">
                  <span>
                    <i className="icon-like icons"></i>
                    {event.votes.dislikesCount}
                  </span>
                  <span>
                    <i className="icon-dislike icons"></i>
                    {event.votes.likesCount}
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
