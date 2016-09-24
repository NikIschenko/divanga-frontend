import React, { Component } from 'react';
import { Link } from 'react-router';
import OneColumn from '../layout/OneColumn';
import '../../media/styles/index.scss';

export default class Page404 extends Component {

  render() {
    return (
      <OneColumn>
        <div className="page-404">
          <main className="row column">
            <h1 className="text-center">404</h1>
            <h2 className="text-center">The page you were looking for doesn't exist.</h2>
            <h2 className="text-center">You might try going <a href="javascript:history.go(-1)">back</a> or <Link to="/">home</Link>.</h2>
          </main>
        </div>
      </OneColumn>

    );
  }
}

