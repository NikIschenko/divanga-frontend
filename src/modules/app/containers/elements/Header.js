import { connect } from 'react-redux';
import element from '../../components/elements/Header';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(element);
