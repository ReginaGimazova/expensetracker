import React from 'react';
import dateFns from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHamburger as food,
  faBusAlt as transport,
  faTshirt as clothing,
  /*    faBicycle as rental,
    faBaby as baby,
    faBabyCarriage,
    faGamepad as entertainment,
    faSprayCan as beauty,
    faMobileAlt as telephone,
    faHome as home,
    faPaw as pet,
    faSmoking as cigarette,
    faGlassCheers as alcohol,
    faPlaneDeparture as travel,
    faBook as education,
    faGraduationCap,
    faMedkit as health,
    faGift as gift,
    faDumbbell as fitness, */
  faRubleSign,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../button';
import spending from '../../data/spending';
import './historyList.css';

library.add(food, transport, clothing);

const HistoryList = ({ setViewType }) => {
  const changeView = () => {
    setViewType('calendar');
  };

  const dateToShow = date => {
    return dateFns.format(date, 'DD MMMM, dddd');
  };

  return (
    <div className="container">
      <section className="historyList">
        <Button onclick={changeView}>switch to calendar view</Button>
        {spending.map(spendingValue => (
          <article className="historyList__item historyCard" key={spendingValue.id}>
            <h3>{dateToShow(spendingValue.date)}</h3>
            <FontAwesomeIcon icon="transport" />
            <small className="historyCard__info_description">{spendingValue.type}</small>
            <p className="historyCard__info_cost">
              {spendingValue.cost}
              <FontAwesomeIcon icon={faRubleSign} />
            </p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default HistoryList;
