import React, { PropTypes, Component } from 'react';
import Spinner from '../../../app/components/elements/Spinner';

export default class ModalMini extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="modal-mini">
        <div className="modal-frame">
          <div className="row flex-items-xs-middle">
            <div className="col-xs shrink">
              <Spinner />
            </div>
            <div className="col-xs">
              <span>{children}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

