import React from 'react';

class RadioList extends React.Component {

  static defaultProps = {
    radios: [],
    checked: null
  };

  constructor(props) {
    super(props);
  }

  check = (event) => {
    this.props.check(event.target.getAttribute('data-value'));
  };

  getRadioCssClass(radio) {
    let cssClass = 'radio';
    cssClass += radio.value == this.props.checked ? ' checked' : '';
    return cssClass;
  };

  render() {
    return (
      <div className="radio-list">
        {this.props.radios.map(radio => (
          <div key={radio.value}>
            <div data-value={radio.value} onClick={this.check} className={this.getRadioCssClass(radio)}>
              { radio.label }
            </div>
          </div>
        ))}
      </div>
    );
  };
}

export default RadioList;