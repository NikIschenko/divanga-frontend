import React, { PropTypes, Component } from 'react';
import { Link }   from 'react-router';
import { Form }   from 'formsy-react';
import classNames from 'classnames';
import ModalMini  from '../common/ModalMini';
import Service    from '../../../../system/Service';
import Notify     from '../../../app/components/elements/Notify';
import Input      from '../../../app/components/elements/Input';
import logoImage  from '../../../app/media/images/divanga.png';

class LoginForm extends Component {

  static defaultProps = {
    title: "Авторизация",
    className: "auth-form",
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.init();
  }

  componentWillUpdate(nextProps) {
    this.state.isLoading = false;
    (nextProps.user.current)
      ? Service.redirect('/')
      : null;
  }

  onSubmit = (data) => {
    this.setState({ isLoading: true });
    this.props.submitLoginForm(data);
  };

  render() {
    const { errors, title, email } = this.props;
    const { isLoading } = this.state;
    const className = classNames('column', this.props.className);

    return (
      <div className="container-fluid">
        {
          (isLoading)
            ? <ModalMini>Авторизация...</ModalMini>
            : null
        }
        <div className="row flex-items-xs-center">
          <Link to="/" className="logo">
            <img src={logoImage} alt="logo"/>
          </Link>
        </div>
        <div className="flex-items-xs-center text-sm-center row">
          <div className="col-md-7 col-lg-4">
            <div className={className}>
              <Form onValidSubmit={this.onSubmit} method="post">
                <h4 className="text-center">{title}</h4>
                {
                  (errors)
                    ? <Notify type="error">{((error) => error)}</Notify>
                    : null
                }
                <Input name="username" placeholder="Ваш логин" />
                <Input name="password" type="password" className="reset-margin" placeholder="Ваш пароль" />
                <div className="row column text-sm-center">
                  <p className="link-block">Еще не с нами? Тогда <Link to="/signup">Зарегистрируйтесь</Link></p>
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm
