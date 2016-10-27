import React           from 'react';
import { connect }     from 'react-redux';
import UserActions     from '../../actions/user';
import Api             from '../../../../system/Api';
import Config          from '../../../app/config/config';
import Service         from '../../../../system/Service';

export class Logout extends React.Component {

  componentWillMount() {
    Api
      .fetchJSON(Config.apiHost + 'api/auth/logout')
      .then(() => {
      dispatch(UserActions.logout());
    });
    Service.redirect('/');
  }
  
  render() {
    return null;
  }

}



const mapStateToProps = ({ user }) => {
  return { ...user };
}

export default connect(mapStateToProps, null)(Logout);
