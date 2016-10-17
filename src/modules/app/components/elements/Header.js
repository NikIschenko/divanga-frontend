import React, { Component, PropTypes } from 'react';
import { Link }  from 'react-router';
import User      from '../../../user/service/User';
import Service   from '../../../../system/Service';
import logoImage from '../../media/images/divanga.png';
import SearchBar from '../../../search/components/elements/SearchBar';

export default class Header extends Component {

  onSearch = (searchStr) => {
    Service.redirect('/s/' + searchStr);
  };

  onCancel = () => {
    Service.redirect('/s');
  };

  render() {
    const { className, user } = this.props;
    const searchBarProps = {
      onSubmit: this.onSearch,
      onCancel: this.onCancel,
    };

    return (
      <header className={className}>
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <Link to="/" className="logo">
                <img src={logoImage} alt="logo"/>
              </Link>
            </div>
            <div className="col-md-7 tape">
              <div className="row">
                <div className="col-xs-4">
                  <h4>Divanga <span className="slogan">Нам важно твое мнение</span></h4>
                </div>
                <div className="col-xs-8">
                  <SearchBar {...searchBarProps} />
                </div>
              </div>
            </div>
            <div className="col-xs-3">
              {
                ((user) => {
                  if (user) {
                    return (
                      <div className="user-profile">
                        <Link to="/">
                          <i className="avatar"></i>
                          {user.login}
                        </Link>
                      </div>
                    );
                  }

                  return (
                    <div className="login-signup">
                      <span className="message">Есть аккаунт?</span>
                      <Link to="/login">Войти</Link>
                      <Link to="/signup" ><i className="si si-plus"></i><span>Создать</span></Link>
                    </div>
                  );
                })(user.current)
              }
            </div>
          </div>
        </div>
      </header>
    );
  }
}
