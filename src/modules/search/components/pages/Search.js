import React, { Component } from 'react';
import TreeColumn from '../../../app/components/layout/ThreeColumn';
import Header     from '../../../app/components/elements/Header';
import '../../media/styles/index.scss';

export default class Search extends Component {

  render() {
    return (
      <div>
        <Header />
        <TreeColumn>
          search page
        </TreeColumn>
      </div>
    );
  }
}
