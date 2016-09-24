import { connect } from 'react-redux';
import component from '../../components/layout/Sidebar';

export const mapStateToProps = ({ event }) => {
  return { event };
};

export default connect(mapStateToProps, null)(component);
