import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class CommentForm extends React.Component  {

  renderCommentForm() {
    return(
     <div className="comment-form">
       <form>
         <div className="row">
           <div className="col-md-8">
             <textarea placeholder="Выскажите свое мнение, расскажите что вы чувствуете, видете, понимаете... и помните, что вас тоже читают"></textarea>
             <button type="submit" className="btn btn-primary">Отправить</button>
           </div>
           <div className="col-md-4">
             <small className="text-muted">Оставляя свой комментарий, я подтверждаю что я ознакомлен с правилами комментирования</small>
           </div>
         </div>
       </form>
     </div>
    );
  }

  renderLoginMessage() {
    return(
      <div className="comment-message"><p>Если вы хотите оставить комментарий вам необходимо <Link to="/login">Войти</Link> или <Link to="/signup">Зарегистрироваться</Link></p></div>
    );
  }

  render() {

    const { user } = this.props;
    const userAvatar = 'https://divangaimages.blob.core.windows.net/avatars/dintel.png';

    return (user.current)
      ? this.renderCommentForm()
      : this.renderLoginMessage();
  }
}

const mapStateToProps = (({ user }) => {
  return { user };
});

export default connect(mapStateToProps, null)(CommentForm);
