import React from 'react';
import './app.scss';
import Arrow from './../Arrow/arrow';
import Film from './../Film/film';
import Navbar from './../Navbar/navbar';
import Sidebar from './../Sidebar/sidebar';
import Search from './../Search/serach';
import AddMovie from '../Add_movie/addMovie';

import filmsArr from './../../../data.json';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleSidebar = this.handleToggleSidebar.bind(this); // bind events
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleArrowMove = this.handleArrowMove.bind(this);
        this.filterFilmsByTitle = this.filterFilmsByTitle.bind(this);
        this.handleOpenAddMovieForm = this.handleOpenAddMovieForm.bind(this);
        this.handleCloseAddMovieForm = this.handleCloseAddMovieForm.bind(this);
        this.state = {
            openSidebar: false,
            arrow: 'down',
            filmsArr: filmsArr,
            openAddMovieForm: false
        };
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                <div className={['md__sidebar',
                    'md__sidebar--black-body',
                    'md__sidebar--white-text',
                    this.state.openSidebar && 'md__sidebar--big-width'].join(' ')}>
                    <Sidebar toggleSidebar={this.handleToggleSidebar} openSidebar={this.state.openSidebar}/>
                </div>
                {this.state.openSidebar &&
                <Arrow arrowState={this.state.arrow} handleArrowMove={this.handleArrowMove}/>
                }

                <div className={['md__navbar',
                    this.state.openSidebar ? 'md__navbar--big-left-margin' : 'md__navbar--small-left-margin',
                    'md__navbar--white-text',
                    'md__navbar--fixed-postion'].join(' ')}>

                    <div className="md__container">
                        <Search filterFilmsByTitle={this.filterFilmsByTitle}/>
                        <Navbar openSidebar={this.state.openSidebar}
                                openAddMovieForm={this.state.openAddMovieForm}
                                filterFilmsByTitle={this.filterFilmsByTitle}
                                handleOpenAddMovieForm = {this.handleOpenAddMovieForm}/>
                    </div>
                    <div className="md__add-movie">
                        <AddMovie handleOpenAddMovieForm = {this.handleOpenAddMovieForm}
                                  handleCloseAddMovieForm = {this.handleCloseAddMovieForm}
                                  isOpen={this.state.openAddMovieForm}/>
                    </div>

                </div>

                <div
                    className={['md__films-container',
                        'md__films-container--white-text',
                        this.state.openSidebar ? 'md__films-container--big-left-margin' : 'md__films-container--small-left-margin',
                        this.state.openAddMovieForm ? 'md__films-container--big-top-margin':
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

    handleOpenAddMovieForm() {
        this.setState(() => ({
            openAddMovieForm: true
        }));
    }

    handleCloseAddMovieForm() {
        this.setState(() => ({
            openAddMovieForm: false
        }));
        console.log(this.state.openAddMovieForm);
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