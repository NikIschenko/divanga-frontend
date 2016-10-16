import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Form } from 'formsy-react';
import ModalMini from '../common/ModalMini';
import { redirectUser } from '../../actions/user';
import Notify from '../../../app/components/elements/Notify';
import Input from '../../../app/components/elements/Input';
import classNames from 'classnames';
import logoImage from '../../../app/media/images/divanga.png';

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
    redirectUser(this.props.current);
  }

  static contextTypes = {
    user: PropTypes.object,
  };

  componentWillUpdate(nextProps) {
    this.state.isLoading = false;
    redirectUser(nextProps.current);

  }

  onSubmit = (data) => {
    this.setState({ isLoading: true });
    this.props.submitLoginForm(data);
  };

  render() {
    const { formError, title, email } = this.props;
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
                  (formError)
                    ? <Notify type="error">{formError}</Notify>
                    : null
                }
                <Input name="username" value={email} placeholder="Ваш логин" />
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

    // return (
    //   <Form onValidSubmit={this.onSubmit} method="post">
    //     {
    //       (isLoading)
    //         ? <ModalMini>Авторизация...</ModalMini>
    //         : null
    //     }
    //     <div className="row align-center">
    //       <div className={className}>
    //         <div className="row column">
    //           <h4 className="text-center">{title}</h4>
    //           {
    //             (formError)
    //               ? <Notify type="error">{formError}</Notify>
    //               : null
    //           }
    //         </div>
    //         <div className="row column">
    //           <Input name="username" value={email} placeholder="Ваш логин" />
    //         </div>
    //         <div className="row column">
    //           <Input name="password" type="password" placeholder="Ваш пароль" />
    //         </div>
    //         <div className="row column">
    //           <p className="link-block">Еще не с нами? Тогда <Link to="/signup">Зарегистрируйтесь</Link></p>
    //         </div>
    //         <button type="submit" className="button big expanded align-bottom">Войти</button>
    //       </div>
    //     </div>
    //   </Form>
    // );
  }
}

export default LoginForm
