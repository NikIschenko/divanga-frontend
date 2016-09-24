import { connect } from 'react-redux';
import { login, signUp } from '../../actions/user';
import component from '../../components/common/SocialAuth';

const mapStateToProps = ({ user }) => {
  return { ...user };
};

const mapDispatchToProps = (dispatch) => {
  return {

    login: (authProvider, data) => {
      login(dispatch, data, authProvider);
    },

    signUp: (authProvider, data) => {
      signUp(dispatch, data, authProvider);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
