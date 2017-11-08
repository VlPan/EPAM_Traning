import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo/logo';
import './icons.scss';


class Icons extends React.Component {

    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    render() {
        return (

            <div className="md-icons">
                <div className="md-icons__column">
                    <i className="fa fa-th-list      md-icons__icon md-icons__main"
                       aria-hidden="true"
                       onClick={this.toggleSidebar}
                    ></i>
                    <i className="fa fa-film         md-icons__icon" aria-hidden="true"></i>
                    <i className="fa fa-file-video-o md-icons__icon" aria-hidden="true"></i>
                    <i className="fa fa-history      md-icons__icon" aria-hidden="true"></i>
                    <i className="fa fa-question     md-icons__icon" aria-hidden="true"></i>
                </div>

                <div className="md-icons__column">
                    {this.props.openSidebar &&
                    <div className="md-icons__labels">
                        <Logo/>
                        <div className="md-icons__label">Movies</div>
                        <div className="md-icons__label">Tv-Shows</div>
                        <div className="md-icons__label">MyLibrary</div>
                        <div className="md-icons__label">Support</div>
                    </div>
                    }
                </div>
            </div>

        );
    }

    toggleSidebar() {
        console.log(!this.props.openSidebar);
        this.props.toggleSidebar();
        console.log(ReactDOM.findDOMNode(this).getElementsByClassName('md-icons__labels'));
    }
}

export default Icons;