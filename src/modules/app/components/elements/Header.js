import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import logoImage from '../../media/images/divanga.png';
import SearchBar from '../../../search/components/elements/SearchBar';

export default class Header extends Component {

  render() {
    const {className} = this.props;

    return (
      <header className={className}>
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <Link to="/" className="logo">
                <img src={logoImage} alt="logo"/>
              </Link>
            </div>
            <div className="col-xs-7">
              <div className="row">
                <div className="col-xs-4">
                  <h4>Divanga <span className="slogan">Нам важно твое мнение</span></h4>
                </div>
                <div className="col-xs-8">
                  <SearchBar />
                </div>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="login-signup">
                <span className="message">Есть аккаунт?</span>
                  <Link to="/login">Войти</Link>
                  <Link to="/signup" ><i className="si si-plus"></i><span>Создать</span></Link>

              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
