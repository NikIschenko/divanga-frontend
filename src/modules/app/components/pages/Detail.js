import React from 'react';
import {Link} from 'react-router';
import Header from '../../containers/elements/Header';
import TwoColumn from '../layout/TwoColumn';

import {mainData, questions, comments } from '../../data/index';
import './../../media/styles/index.scss';
import RadioList from '../elements/RadioList';
import Api from '../../../../system/Api';
import {Event} from '../../../event/components/elements/Event';
import EventActions from '../../../event/actions/event';
import { Spinner } from '../../../app';
import { EventService } from '../../../event';
import { Questions } from '../../../questions'
import { Comments, CommentForm } from '../../../comment'


export default class Detail extends React.Component {

  componentWillMount() {
    const { dispatch, params } = this.props;

    EventService
      .getDetailInfo(params.id)
      .then((response) => {
        dispatch(EventActions.setDetail(response))
      });
  }

  render() {

    const { detailEvent } = this.props.event;
    const tags = detailEvent.tags || [];
    const questions = detailEvent.questions || [];

    console.log(detailEvent);

    return (
      <div className="detail-page">
        <Header />
        <TwoColumn>
          {
            (!detailEvent)
              ? <Spinner />
              : null
          }
         <Event event={detailEvent} full={true} />
         <div className="tags-block">
           {
             tags.map((tag, key) => <Link className="tag-link" to={`/tag/${tag.id}`} key={key} >#{tag.title}</Link>)
           }
         </div>
          <Questions questions={questions} />
          <Comments eventId={detailEvent.id} />
          <CommentForm />
        </TwoColumn>
      </div>
    );

    // return (
    //   <div className="test">
    //     <Header />
    //     <TwoColumn >
    //
    //       <div className="block">
    //         <div className="block-header">
    //           <h3>{detailEvent.title}</h3>
    //         </div>
    //       </div>
    //
    //
    //       <div className="event">
    //         <h3>
    //
    //         </h3>
    //         <div className="text" dangerouslySetInnerHTML={{__html: detailEvent.text}}></div>
    //         <div className="row actions">
    //           <div className="column">
    //             <dl className="date">
    //               <dt>{ detailEvent.createDate}</dt>
    //               <dd>добавлено</dd>
    //             </dl>
    //           </div>
    //           <div className="column text-right">
    //             <dl className="views">
    //               <dt><i className="si-eye si"></i>{ detailEvent.viewsCount}</dt>
    //               <dd>просмотров</dd>
    //             </dl>
    //           </div>
    //         </div>
    //         <div className="predictions">
    //           <strong className="question">{questions.title}</strong>
    //           <RadioList
    //             radios={predictionList}
    //             checked={this.state.currentRadioListCheck}
    //             check={ this.checkRadioList }
    //           />
    //         </div>
    //       </div>
    //
    //       <div className="comments">
    //         <strong>Обсуждение</strong>
    //         {
    //           (comments.map((comment, key) => {
    //
    //             return (
    //               <div key={key} className="comment">
    //                 <div className="row">
    //                   <div className="image columns shrink">
    //                     <img src={comment.user.image} />
    //                   </div>
    //                   <div className="columns text">
    //                     <dl>
    //                       <dt>{comment.user.name}, <span className="date">{comment.createDate}</span></dt>
    //                       <dd>{comment.comment}</dd>
    //                     </dl>
    //                   </div>
    //                 </div>
    //               </div>
    //             )
    //           }))
    //         }
    //       </div>
    //     </TwoColumn>
    //   </div>
    // );
  }
}
