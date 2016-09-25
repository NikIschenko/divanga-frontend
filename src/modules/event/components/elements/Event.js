import React from 'react';
import moment from 'moment';
import {Link} from 'react-router';


export class Event extends React.Component {

  static defaultProps = {
    route: false,
  }

  renderTitle() {
    const {event, route} = this.props;

    if (route) {
      return (
        <h3>
          <dl>
            <dt><Link to={`/show/${event.id}`}>{event.title}</Link></dt>
            <dd><i className="avatar" style={{backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png)'}}></i><span>великолепный_дрыщ</span></dd>
          </dl>
        </h3>
      );
    }

    return (
      <h3>
        <dl>
          <dt>{event.title}</dt>
          <dd><i className="avatar" style={{backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png)'}}></i><span>пурга911</span></dd>
        </dl>
      </h3>
    );
  }

  render() {

    const {event, route} = this.props;

    return (
      <div className="event">

        {this.renderTitle()}

        <div className="text" dangerouslySetInnerHTML={{__html: event.text}}></div>
        <div className="row actions">
          <div className="column">
            { event.createDate}
          </div>
          <div className="column">
            <span>
              просмотров { event.viewsCount}</span>
          </div>
        </div>
      </div>
    );
  }
}
