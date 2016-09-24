import { connect } from 'react-redux';
import UserActions, { login } from '../../actions/user';
import component from '../../components/forms/LoginForm';

const mapStateToProps = ({ user }) => ({ ...user });

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(UserActions.init());
  },
  submitLoginForm: (data) => {
    login(dispatch, data);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
