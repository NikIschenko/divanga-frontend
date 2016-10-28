import React        from 'react';
import ThreeColumn  from '../layout/ThreeColumn';
import Api          from '../../../../system/Api';
import Spinner      from '../../../app/components/elements/Spinner';
import { Event }    from '../../../event/components/elements/Event';
import EventActions from '../../../event/actions/event';
import './../../media/styles/index.scss';
import { mainData } from '../../data/index'

export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    }
  }

  componentWillMount() {
    const {dispatch} = this.props;
    Api.fetchJSON('http://40.68.243.107:8040/api/events/confirmed', {
      page: 0,
      size: 20,
    }).then((response) => {
      console.log(response);
      dispatch(EventActions.setMain(response));
      //dispatch(EventActions.set(response));
    });
  }

  componentWillUpdate(nextProps) {
    if (nextProps.event.mainItems !== this.props.event.mainItems) {
      this.state.isLoading = false;
    }
  }

  render() {

    var {mainItems} = this.props.event;
    const {isLoading} = this.state;

    return (
      <ThreeColumn>
        {
          (() => {
            if (isLoading) {
              return <Spinner />;
            }
            return (
              <div>
                <div className="block-header border-b">
                  <h1 className="title">Лента последних новостей</h1>
                </div>
                <div className="block-content">
                  {
                    mainItems.map((item, key) => {
                      return (
                        <Event route={true} key={key} event={item}/>
                      );
                    })
                  }
                </div>
              </div>
            );
          })()
        }
      </ThreeColumn>
    );
  }
}
