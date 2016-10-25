import React, { Component } from 'react';
import Header        from '../../containers/elements/Header';
import TwoColumn     from '../layout/TwoColumn';
import './../../media/styles/index.scss';

export default class About extends Component {


  render() {

    return (
      <div>
        <Header />
        <TwoColumn>
           <div className="block">
             <div className="block-header border-b">
               <h1 className="title">О проекте</h1>
             </div>
             <div className="block-content">
               <p> Это страница с описанием проекта</p>
             </div>
           </div>
        </TwoColumn>
      </div>
    );
  }
}
