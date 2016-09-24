import React, { PropTypes, Component } from 'react';
import Spinner from '../../../app/components/elements/Spinner';

export default class ModalMini extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="modal-mini">
        <div className="modal-frame">
          <div className="row align-middle">
            <div className="column shrink">
              <Spinner />
            </div>
            <div className="column">
              <span>{children}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

