import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Menu from '../elements/Menu';
import AppActions from '../../actions/app';
import classNames from 'classnames';

class LeftSidebar extends Component {

  static propTypes = {
    className: PropTypes.string,
    dispatch: PropTypes.func,
    current: PropTypes.object,
  };

  static contextTypes = {
    user: React.PropTypes.object,
  };

  render() {
    const { className, dispatch } = this.props;
    const { user } = this.context;
    const classes = classNames("left", className);

    return (
      <aside className={classes} onClick={() => dispatch(AppActions.toggleSidebar(''))}>
        <section>
          {(() => {
            if (user.isLogin()) {
              return (
                <div>
                  <ul className="user row align-middle">
                    <li className="column shrink">
                      {
                        (user.getProperty('image'))
                          ? <img className="user-thumb" src={user.getProperty('image')} />
                          : <i className="hbc-user-stroke" />
                      }
                    </li>
                    <li className="column">
                      <dl>
                        <dt>{user.getProperty('firstName') + ' ' + user.getProperty('lastName')}</dt>
                        <dd><small className="text-gray">{user.getProperty('email')}</small></dd>
                      </dl>
                    </li>
                    <li className="column text-right">
                      <Link to="/logout" className="button logout"><i className="hbc-upload-1" /></Link>
                    </li>
                  </ul>
                  <div className="caption">My Registry</div>
                  <Menu>{[]}</Menu>
                </div>
              );
            }
          })()
          }
          <div className="caption">Catalog</div>
          <Menu>{[]}</Menu>
        </section>
      </aside>
    );
  }
}

export default LeftSidebar;
