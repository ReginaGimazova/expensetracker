import React, {Component} from 'react';
import classNames from 'classnames';
import './calendar__label.css';

class Event extends Component {
    
    handleEvent = () => {
        let event = this.props.event;
        this.props.handleEvent(event);
    };
    
    onClickEvent = () => {
        this.handleEvent();
        this.props.onclick();
    };
    
    render() {
        let {children, type} = this.props;
        return (
            <div
                className={classNames("calendar__label", type === 'month' ? "calendar__label_notBlock" : "calendar__label_block")}
                onClick={this.onClickEvent}>
                {children}
            </div>
        )
    }
}

export default Event
