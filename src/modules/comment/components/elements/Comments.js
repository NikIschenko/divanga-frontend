import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentService from '../../service/CommentService';
import CommentActions from '../../actions/comment';
import moment from 'moment';

export class Comments extends React.Component  {

  componentWillMount() {
    const { eventId, dispatch } = this.props;
    dispatch(CommentActions.setComments([]));

    CommentService
      .getCommentsByEvent(eventId)
      .then((comments) => dispatch(CommentActions.setComments(comments)));
  }

  render() {

    const { comment } = this.props;
    const userAvatar = 'https://divangaimages.blob.core.windows.net/avatars/dintel.png'; // TODO replace "dintel" to "%login"

    return(
      <div className="block comments">
        <div className="block-header">
          <div className="block-title">Обсуждение новости</div>
        </div>
        <div className="block-content">
          {
            (comment.list.map((comment, key) => {
              return (
                <div key={key} className="comment">
                  <div className="row">
                    <div className="image columns shrink">
                      <img src={userAvatar.replace('%login', comment.userLogin)}/>
                    </div>
                    <div className="columns text">
                      <dl>
                        <dt>{comment.userLogin}, <span className="date">
                           {moment(comment.commentDate).startOf('hour').fromNow()}
                          , в {moment(comment.commentDate).format('H:MM')}
                        </span></dt>
                        <dd>{comment.text}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              )
            }))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (({ event, comment }) => {
  return { event, comment };
});

export default connect(mapStateToProps, null)(Comments);
