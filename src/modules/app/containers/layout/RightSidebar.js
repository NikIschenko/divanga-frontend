import { connect } from 'react-redux';
import component from '../../components/layout/RightSidebar';

export const mapStateToProps = ({ user, app }) => {
  return { user, app };
};

export default connect(mapStateToProps, null)(component);
