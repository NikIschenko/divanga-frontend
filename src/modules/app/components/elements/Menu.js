import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

class Menu extends Component {
  static propTypes = {
    className: PropTypes.string,
    liClassName: PropTypes.string,
    children: PropTypes.array,
  };

  renderChildren(children) {

    return (
      <ul className="sub-menu">
        {
          children.map((item, key) => {
            return (
              <li key={key} className="sub-menu-link">
                <Link
                  activeClassName="active"
                  to={item.path || `/tag/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    const {children, className} = this.props;
    const classesUl = classNames('menu column', className);

    return (
      <ul className={classesUl}>
        {
          children.map((item, key) => {
            return (
              <li key={key} className="menu-link">
                <Link
                  activeClassName="active"
                  to={item.path || `/tag/${item.id}`}>
                  {item.title}
                  {
                    (item.children)
                      ? this.renderChildren(item.children)
                      : null
                  }
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default Menu;
