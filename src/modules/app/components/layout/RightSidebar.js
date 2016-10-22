import React, { Component, PropTypes } from 'react';
import { Link }     from 'react-router';
import { root, catalog } from '../../config/menu';
import classNames   from 'classnames';
import AppActions   from '../../actions/app';
import Menu         from '../elements/Menu';
import User         from '../../../../system/User';
import Service      from '../../../../system/Service';
import SearchBar    from '../../../search/components/elements/SearchBar';


class RightSidebar extends Component {

  static propTypes = {
    className: PropTypes.string,
    dispatch: PropTypes.func,
  };

  onSearch = (searchStr) => {
    Service.redirect('/s/' + searchStr);
  };

  onCancel = () => {
    Service.redirect('/s');
  };

  render() {
    const {
      app,
      dispatch }  = this.props;
    const user    = new User(this.props.user.current);
    const classes = classNames("right", app.className);

    const searchBarProps = {
      onSubmit: this.onSearch,
      onCancel: this.onCancel,
      className: '',
    };

    return (
      <aside className={classes} onClick={() => dispatch(AppActions.toggleSidebar(''))}>
        <section>
          <SearchBar {...searchBarProps} />
          {(() => {

            if (user.isLogin()) {
              return (
                <div className="user">
                  {
                    (user.getProperty('image'))
                      ? <img className="user-thumb" src={user.getProperty('image')} />
                      : <i className="hbc-user-stroke" />
                  }
                  {user.getProperty('firstName')}
                </div>
              );
            }
          })()
          }
          <Menu>{root}</Menu>
          <Menu>{catalog}</Menu>
        </section>
      </aside>
    );
  }
}

export default RightSidebar;
