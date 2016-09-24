import { connect } from 'react-redux';
import PopupActions from '../../actions/popup';
import Popup from '../../components/elements/Popup';

const mapStateToProps = ({ app }) => ({ ...app.popup });

const mapDispatchToProps = (dispatch) => ({
  popupShow(data) {
    dispatch(PopupActions.popupShow(data));
  },

  popupHide() {
    dispatch(PopupActions.popupHide());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
