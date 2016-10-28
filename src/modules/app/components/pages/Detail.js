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

    dispatch(EventActions.setDetail(null));
    EventService
      .getDetailInfo(params.id)
      .then((response) => {
        dispatch(EventActions.setDetail(response))
      });
  }


  render() {

    const { detailEvent } = this.props.event;

    if (!detailEvent) {
      return (
        <div className="detail-page">
          <Header />
          <TwoColumn><Spinner /></TwoColumn>
        </div>
      );
    }

    return (
      <div className="detail-page">
        <Header />
        <TwoColumn>
         <Event event={detailEvent} full={true} />
         <div className="tags-block">
           {
             detailEvent.tags.map((tag, key) => <Link className="tag-link" to={`/tag/${tag.id}`} key={key} >#{tag.title}</Link>)
           }
         </div>
          <Questions questions={detailEvent.questions} />
          <Comments eventId={detailEvent.id} />
          <CommentForm />
        </TwoColumn>
      </div>
    );
  }
}
