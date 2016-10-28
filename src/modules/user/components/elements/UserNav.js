import React, { PropTypes, Component } from 'react';
import { Link }    from 'react-router';
import AppActions from '../../../app/actions/app';

export default class UserNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  getNav() {
    return [{
      link: '/profile',
      text: 'Профиль',
    }, {
      link: '/logout',
      text: 'Выход',
    }];
  }

  onOpen = () => {
    this.setState({ open: true });
  }

  onClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { user } = this.props;
    const { open } = this.state;
    const className = (open) ? 'open' : '';

    return (
      <div className="user-profile">
        <Link onClick={this.onOpen}>
          <i className="avatar" />
          <span>{user.login}</span>
          <i className="icon-arrow-down icons" />
          <div className={`content ${className}`}>
            <div className="overlay" onClick={this.onClose} />
            <ul>
              <li className="caption">Мой профиль</li>
              {
                this.getNav().map((item, key) => <li key={key}><Link to={item.link}>{item.text}</Link></li>)
              }
            </ul>
          </div>
        </Link>
        <span className="nav hidden-md-up" onClick={() => dispatch(AppActions.toggleSidebar('open'))}><i className="hbc-menu" /></span>
      </div>
    );
  }
}



