import { connect } from 'react-redux';
import AppActions from '../../actions/app';
import Popup from '../../components/elements/Popup';

const mapStateToProps = ({ app }) => ({ ...app.popup });

const mapDispatchToProps = (dispatch) => ({
  popupShow(data) {
    dispatch(AppActions.popupShow(data));
  },

  popupHide() {
    dispatch(AppActions.popupHide());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
