import React from 'react';
import { Link } from 'react-router';
import Header from '../elements/Header';
import TwoColumn from '../layout/TwoColumn';

import './../../media/styles/index.scss';
import Api from '../../../../system/Api';
import { Event } from '../../../event/components/elements/Event';
import EventActions from '../../../event/actions/event';

export default class Index extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;

    // var json = JSON.stringify({
    //     username: "admin",
    //     password: "admin"
    //   });

    // Api.sendPost('api/authenticate', {
    //   username: "admin",
    //   password: "admin"
    // }).then((response) => {
    //   console.log(response);
    //   dispatch()
    // });

    // Api.fetchJSON('api/events', {
    //   page: 1,
    //   size: 20,
    // }).then((response) => {
    //   dispatch(EventActions.set(response));
    // });

    const response = [
      {
        id: 1,
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Как мы все знаем 24-25 сентября проходит <a href='#'>#Socialweekend8</a> хакатон. Два безбашенных дня, когда люди представляют свои идеи, делятся друг с другом впечатлениями и эмоциями. Так вот, среди многочисленных команд, свою идею предлагает и команда Дениса, Николая и Антона с проектом <b>Диванга</b>. За деталями под кат...",
        viewsCount: 128,
      },
      {
        id: 1,
        create_date: "22-09-2016",
        title: "Прогноз матча Барселона Бавария",
        text: "<img src='http://stavki1.com/wp-content/uploads/2015/05/%D0%91%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0-%E2%80%93-%D0%91%D0%B0%D0%B2%D0%B0%D1%80%D0%B8%D1%8F.png_1430804787-1.png' /> Уже в эту среду состоится матч между грандами футбола, между командами Барселона и Бавария Мюнхен. Коэффициенты букмейкеров как обычно практически 1 к 1. А как думаешь ты? ",
        viewsCount: 4024,
      },
      {
        id: 1,
        create_date: "24-09-2016",
        title: 'Победит ли вообще Минское "Динамо" двукратного обладателя Кубка Гагарина Московское "Динамо"?',
        text: "<img src='http://sputnik.by/images/101841/75/1018417589.jpg' /> 24.09.2016 состоиться <a href='http://sport.tut.by/news/hockey/513449.html' target='_blank'>#матч</a> между двумя Динамо машинами, между дружинами представленными городами Минск и Москва. Как думаете вы каков будет результат матча ?",
        viewsCount: 128
      },
      {
        id: 1,
        create_date: "24-09-2016",
        title: "Курс белорусского рубля к доллару к концу сентября.",
        text: '<img src="http://4esnok.by/wp-content/uploads/2016/05/bb3168c0fe34056536c75bd21d9f1d68.jpg" /> Все мы знаем как непредсказуем бывает наш мир. За этим миром почему-то всегда следует наша "белорусская белочка". А как считаете вы будет ли курс доллара к нашему рублю 1 к 2.0000?',
        viewsCount: 128,
      },
      {
        id: 1,
        create_date: "24-09-2016",
        title: "Победят ли на хакатоне #socialWeekend команда с проектом Диванга!",
        text: "<img src='http://naviny.by/sites/default/files/socialweekend-hakaton.jpg' /> Ставлю бутылку водки что ребята а именно Денис Антоха и Колян победят",
        viewsCount: 128,
      }
    ];
    dispatch(EventActions.setMain(response))
  }

  render() {

    const { mainItems } = this.props.event;

    return (
      <div className="test">
        <Header />
        <TwoColumn >
          {
            mainItems.map((item, key) => {
              return (
                <Event route={true} key={key} event={item} />
              );
            })
          }
        </TwoColumn>
      </div>
    );
  }
}
