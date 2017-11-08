import React from 'react';
import Search from './Search/serach';
import './navbar.scss';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={['md-navbar',
                this.props.openSidebar ? 'md-navbar--big-left-margin' : 'md-navbar--small-left-margin',
               'md-navbar--white-text',
               'md-navbar--fixed-postion'].join(' ')}>
                <div className="md-navbar__container">
                    <Search filterFilmsByTitle = {this.props.filterFilmsByTitle}/>
                    <ul className="md-navbar__nav">
                        <li className="md-navbar__nav-item">Add movie</li>
                        <li className="md-navbar__nav-item">About</li>
                        <li className="md-navbar__nav-item">Pricing</li>
                        <li className="md-navbar__nav-item">Blog</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;