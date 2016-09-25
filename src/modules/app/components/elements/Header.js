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
          <div className="column small-3">
            <Link to="/" className="logo">
              <img src={logoImage} alt="logo"/>
            </Link>
            <dl>
              <dt>Divanga</dt>
              <dd>Нам важно твое мнение</dd>
            </dl>
          </div>
          <div className="column small-7">
            <ul className="menu">
              <li className="menu-link">
                <Link>
                  <i className="si si-star"></i>
                  Топ событий
                  <ul className="sub-menu">
                    <li><Link to="/top/3">За 3 дня</Link></li>
                    <li><Link to="/top/7">За неделю</Link></li>
                    <li><Link to="/top/30">За месяц</Link></li>
                    <li><Link to="/top/365">За год</Link></li>
                    <li><Link to="/top/999">За все время</Link></li>
                  </ul>
                </Link>
              </li>
              <li>
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
