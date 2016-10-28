import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { root, catalog } from '../../config/menu';
import classNames from 'classnames';
import Menu from '../elements/Menu';
import Api from '../../../../system/Api';
import Config from '../../config/config';
import AppActions from '../../actions/app';

export class TwoColumn extends Component {

  componentWillMount() {
    this.props.getPopularTags();
  }

  render() {
    const { children, className, app } = this.props;
    const layoutClass = classNames('layout-2', 'container', className);

    return (
      <main className={layoutClass}>
        <div className="row">
          <div className="col-md-2">
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
          <div className="col-xs col-md-10 tape">
            {children}
          </div>
        </div>
      </main>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(TwoColumn);
