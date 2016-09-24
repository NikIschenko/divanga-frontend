import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import SearchBar from '../../../search/components/elements/SearchBar';
import logoImage from '../../media/images/logo@2x.png';

export default class Header extends Component {

  render() {
    const {className} = this.props;

    return (
      <header className={className}>
        <div className="row large-collapse align-middle">
          <div className="column shrink">
            <Link to="/" className="logo">
              <img src={logoImage} alt="logo"/>
            </Link>
          </div>
          <div className="column small-6">
            <ul className="menu">
              <li className="menu-link">
                <Link>
                  Лучшее
                  <ul className="sub-menu">
                    <li><Link>За 3 дня</Link></li>
                    <li><Link>За неделю</Link></li>
                    <li><Link>За месяц</Link></li>
                    <li><Link>За год</Link></li>
                    <li><Link>За все время</Link></li>
                  </ul>
                </Link>
              </li>
              <li className="search">
                <SearchBar />
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="login-block">
              <Link to="/login">Войти</Link>
              <Link to="/signup">Регистрация</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
