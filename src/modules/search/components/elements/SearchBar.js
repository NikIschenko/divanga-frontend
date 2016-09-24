import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class SearchBar extends Component {
  static propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    searchStr: PropTypes.string,
    searchStrLengthMin: PropTypes.number,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProps = {
    id: 'search-input',
    placeholder: 'Поиск по тегам',
    className: '',
    searchStr: '',
    searchStrLengthMin: 1,
    onSubmit: () => null,
    onChange: () => null,
    onCancel: () => null,
  };

  constructor(props) {
    super(props);

    this.state = {
      active: !_.isEmpty(props.searchStr),
      searchStr: props.searchStr,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchStr !== this.props.searchStr) {
      this.setState({
        searchStr: nextProps.searchStr,
      });
    }
  }

  onClick = (event) => {
    event.preventDefault();
    this.refs.searchStr.focus();
  };

  onChange = (event) => {
    const searchStr = event.target.value;

    this.setState({ searchStr });
    if (searchStr.length >= this.props.searchStrLengthMin) {
      this.props.onChange(searchStr);
    }
  };

  onSubmit = (event) => {
    const { searchStr } = this.state;
    const { searchStrLengthMin } = this.props;

    if (event.key === 'Enter' && searchStr.length >= searchStrLengthMin) {
      this.props.onSubmit(searchStr);
    }
  };

  render() {
    const { active, searchStr } = this.state;
    const { placeholder, className, onCancel } = this.props;
    const classNames = classnames('search', { active });
    const classNamesBar = classnames('search-bar',className);

    return (
      <div className={classNamesBar}>
        <div className={classNames} onClick={this.onClick}>
          <div className="search-content">
            <input
              ref="searchStr"
              id="search-input"
              value={searchStr}
              placeholder={placeholder}
              onChange={this.onChange}
              onKeyDown={this.onSubmit}
              onFocus={() => this.setState({ active: true })}
              onBlur={() => this.setState({ active: !_.isEmpty(searchStr) })}
            />
          </div>
          <span className="cancel" onClick={onCancel} />
        </div>
      </div>
    );
  }
}
