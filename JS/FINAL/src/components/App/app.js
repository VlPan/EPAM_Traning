import React from 'react';
import './app.scss';
import Arrow from './../Arrow/arrow';
import Film from './../Film/film';
import Navbar from './../Navbar/navbar';
import Sidebar from './../Sidebar/sidebar';

import filmsArr from './../../../data.json';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleSidebar = this.handleToggleSidebar.bind(this); // bind events
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleArrowMove = this.handleArrowMove.bind(this);
        this.filterFilmsByTitle = this.filterFilmsByTitle.bind(this);
        this.state = {
            openSidebar: false,
            arrow: 'down',
            filmsArr: filmsArr
        };
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                <Sidebar toggleSidebar={this.handleToggleSidebar} openSidebar={this.state.openSidebar}/>
                {this.state.openSidebar &&
                <Arrow arrowState={this.state.arrow} handleArrowMove={this.handleArrowMove}/>}
                <Navbar openSidebar={this.state.openSidebar} filterFilmsByTitle={this.filterFilmsByTitle}/>
                <div
                    className={['md__films-container',
                        'md__films-container--white-text',
                        this.state.openSidebar ? 'md__films-container--big-left-margin' : 'md__films-container--small-left-margin',
                        'md__films-container--small-top-margin'].join(' ')}>
                    {this.state.filmsArr.map((film, index) => {
                        return (
                            <Film key={index} title={film.title} imagePath={film.poster_path}/>
                        );
                    })}
                </div>
            </div>
        );
    }

    handleToggleSidebar() {
        this.setState((prevState) => ({
            openSidebar: !prevState.openSidebar
        }));
    }

    handleMouseMove(event) {
        if (event.pageY > 800) {
            this.setState(() => ({arrow: 'up'}));
        } else {
            this.setState(() => ({arrow: 'down'}));
        }
    }

    handleArrowMove() {
        if (this.state.arrow === 'up') {
            window.scrollTo(0, 0);
            this.setState(() => ({arrow: 'down'}));
        } else {
            window.scrollTo(0, document.body.clientHeight);
            this.setState(() => ({arrow: 'up'}));
        }
    }

    filterFilmsByTitle(title) {
        if (title.length === 0) {
            this.setState(() => ({
                filmsArr: filmsArr
            }));
        }
        this.setState(() => ({
            filmsArr: filmsArr.filter((item) => {
                return item.title.indexOf(title) !== -1;
            })
        }));
    }
}

export default App;