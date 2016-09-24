import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

export default class Popup extends Component {
  static propTypes = {
    popupHide: PropTypes.func,
  };

  static defaultProps = {
    isOpened: false,
    className: '',
    hideCloseButton: false,
    content: '',
  };

  onHide = () => {
    const { hideCloseButton, popupHide } = this.props.popup || this.props;

    if (!hideCloseButton) {
      popupHide();
    }
  };

  render() {
    const { content, isOpened, popupHide, className, hideCloseButton } = this.props.popup || this.props;

    return (
      <Modal className={className} show={isOpened} onHide={this.onHide}>
        {
          hideCloseButton ? null : (
            <Modal.Header>
              <div className="close" onClick={popupHide}>Close</div>
            </Modal.Header>
          )
        }
        <Modal.Body>
          {content}
        </Modal.Body>
      </Modal>
    );
  }
}
