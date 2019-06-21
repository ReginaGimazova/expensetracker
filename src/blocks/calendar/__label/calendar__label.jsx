import React, { Component } from 'react';
import classNames from 'classnames';
import './calendar__label.css';

class Event extends Component {
  handleEvent = () => {
    const { event, handleEvent } = this.props;
    handleEvent(event);
  };

  onClickEvent = () => {
    const { onclick } = this.props;
    this.handleEvent();
    onclick();
  };

  render() {
    const { children, type } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        className={classNames(
          'calendar__label',
          type === 'month' ? 'calendar__label_notBlock' : 'calendar__label_block',
        )}
        onClick={this.onClickEvent}
      >
        {children}
      </div>
    );
  }
}

export default Event;
