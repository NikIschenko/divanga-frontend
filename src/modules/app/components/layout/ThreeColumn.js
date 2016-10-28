import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { root, catalog } from '../../config/menu';
import classNames from 'classnames';
import Menu from '../elements/Menu';
import Header  from '../../containers/elements/Header';
import Sidebar from '../../containers/layout/Sidebar';
import Api from '../../../../system/Api';
import Config from '../../config/config';
import AppActions from '../../actions/app';

export class ThreeColumn extends Component {

  componentWillMount() {
    this.props.getPopularTags();
  }

  render() {
    const { children, className, app } = this.props;
    const layoutClass = classNames('layout-3', 'container', className);
    
    return (
      <div>
        <Header />
        <main className={layoutClass}>
          <div className="row">
            <div className="col-md-2 hidden-sm-down">
              <Menu className="offset">
                {root}
              </Menu>
              <p className="caption">Популярное<br/>по тегам</p>
              <Menu>
                {app.popularTags}
              </Menu>
              <p className="caption">
                <Link activeClassName="active" to="/about">Помощь</Link>
              </p>
            </div>
            <div className="col-xs col-md-7 tape">
              {children}
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </main>
      </div>
    );
  }
};



export const mapStateToProps = ({ app }) => {
  return { app };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getPopularTags: () => {
      Api
        .fetchJSON(Config.apiHost + 'api/tags')
        .then((response) => dispatch(AppActions.setPopularTags(response)))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreeColumn);

