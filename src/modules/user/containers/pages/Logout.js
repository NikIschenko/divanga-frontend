import { connect } from 'react-redux';
import UserActions from '../../actions/user';
import Api from '../../../../system/Api';
import page from '../../components/pages/Logout';

function mapStateToProps({ user }) {
  return { ...user };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      Api.fetchJSON('/api/auth/logout', false).then(() => {
        dispatch(UserActions.logout());
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(page);
