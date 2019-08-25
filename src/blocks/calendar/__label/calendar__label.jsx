import React from 'react';
import classNames from 'classnames';
import './calendar__label.css';

const Event = ({ event, handleEvent, onclick, children, type }) => {
  const onClickEvent = () => {
    handleEvent(event);
    onclick();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={classNames(
        'calendar__label',
        type === 'month' ? 'calendar__label_notBlock' : 'calendar__label_block',
      )}
      onClick={onClickEvent}
    >
      {children}
    </div>
  );
};

export default Event;
