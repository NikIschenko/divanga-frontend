import React from 'react';
import moment from 'moment';
import {Link} from 'react-router';


export class EventSimple extends React.Component {
  
  render() {
    const { event } = this.props;

    return (
      <div className="card event-card-simple">
        <div className="card-block">
          <div className="card-title">
            <Link to={`/show/${event.id}`}>{event.title}</Link>
            <span className="date">
              {moment(event.createDate).startOf('hour').fromNow()}
              , в {moment(event.createDate).format('H:MM')}
            </span>
          </div>
          <div className="text" dangerouslySetInnerHTML={{__html: event.previewText}}></div>
        </div>
      </div>
    );
  }
}
