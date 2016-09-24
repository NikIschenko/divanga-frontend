import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';


export class Event extends React.Component {

  static defaultProps = {
    route: false,
  }

  render() {

    const { event, route } = this.props;

    return (
      <div className="event">
        <h3>
          {
            (route)
              ? <Link to={`/show/${event.id}`}>{event.title}</Link>
              : event.title
          }
        </h3>
        <div className="text" dangerouslySetInnerHTML={{__html: event.text}}></div>
        <div className="row actions">
          <div className="column">
            { event.create_date}
          </div>
          <div className="column">
           <span>просмотров { event.views}</span>
          </div>
        </div>
      </div>
    );
  }
}
