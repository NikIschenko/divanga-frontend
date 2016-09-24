import React from 'react';
import Service from '../../../../system/Service';

class Logout extends React.Component {

  componentWillMount() {
    this.props.logout();
    Service.redirect('/');
  }
  
  render() {
    return null;
  }

}

export default Logout;
