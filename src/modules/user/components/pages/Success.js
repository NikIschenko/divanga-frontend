import React     from 'react';
import { Link }  from 'react-router';
import logoImage from '../../../app/media/images/divanga.png';

class Success extends React.Component {

  static messages = {
    title:    'Благодарим вас за регистрацию!',
    text:     'Спасибо! Регистрация прошла успешно! Для управления вашим аккаунтом вы можете перейти на страницу',
    linkText: 'вашего профиля.',
  }

  render() {
    return (
      <div className="signup-success">
        <div className="container-fluid">
          <div className="row flex-items-xs-center">
            <Link to="/" className="logo">
              <img src={logoImage} alt="logo"/>
            </Link>
          </div>
          <div className="flex-items-xs-center text-sm-center row">
            <div className="col-md-7 col-lg-5">
              <div className="block">
                <div className="block-content">
                  <h4>Диванга говорит спасибо!</h4>
                  <p className="font-w800 text-sm-center">{Success.messages.title}</p>
                  <p>
                    {Success.messages.text} <Link to="/profile" className="link">{Success.messages.linkText}</Link>
                  </p>

                  <div className="text-sm-center">
                    <br/>
                    <br/>
                    <Link to="/" className="btn btn-primary">Вернуться на главную</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
