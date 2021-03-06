import React           from 'react';
import { connect }     from 'react-redux';
import UserActions     from '../../actions/user';
import Service         from '../../../../system/Service';

export class Logout extends React.Component {

  componentWillMount() {
    this.props.dispatch(UserActions.logout());
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
