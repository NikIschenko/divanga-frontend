import React from 'react';
import Spinner from './Spinner';

class RightColumnSpinner extends React.Component {
  render() {
    return (
      <div className="column-spinner">
        <Spinner className="text-right" radius="50" width={2} />
      </div>
    );
  }
}

export default RightColumnSpinner;