import { connect } from 'react-redux';
import component from '../../components/pages/Index';

export const mapStateToProps = ({ user, app }) => {
  return { ...user, ...app };
};

export default connect(mapStateToProps, null)(component);
