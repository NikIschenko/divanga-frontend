import React     from 'react';
import { Link }  from 'react-router';
import logoImage from '../../../app/media/images/divanga.png';

class Page404 extends React.Component {

  static messages = {
    title:    'Уфф! Вот это поворот!',
    text:     'К сожалению даже Диванга не смогла найти, то что вам нужно. И знаете почему? Потому что то, что вы ищите не существует...',
  }

  render() {
    return (
      <div className="not-found">
        <div className="container-fluid">
          <div className="row flex-items-xs-center">
            <Link to="/" className="logo">
              <img src={logoImage} alt="logo"/>
            </Link>
          </div>
          <div className="flex-items-xs-center text-sm-center row">
            <div className="col-md-7 col-lg-5">
              <h1>404</h1>
              <p className="sub-text">{Page404.messages.title}</p>
              <p>
                {Page404.messages.text} <Link to="/profile" className="link">{Page404.messages.linkText}</Link>
              </p>

              <div className="text-sm-center">
                <br/>
                <br/>
                <Link to="/" className="btn btn-primary">Создать свою новость</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;
