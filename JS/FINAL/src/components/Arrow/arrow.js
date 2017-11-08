import React from 'react';
import './arrow.scss';


class Arrow extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="md-arrow
             md-arrow--black-body
              md-arrow--position-fixed
               md-arrow--big-left-margin"
            onClick={this.props.handleArrowMove}
            >
                {this.props.arrowState === 'down' && <i className="fa fa-arrow-down md-arrow__arrow" aria-hidden="true"></i>}
                {this.props.arrowState === 'up' && <i className="fa fa-arrow-up md-arrow__arrow" aria-hidden="true"></i>}
            </div>
        );
    }
}

export default Arrow;
