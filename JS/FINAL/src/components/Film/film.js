import React from 'react';
import './film.scss';



class Films extends React.Component {
    constructor(props){
        super(props);

        this.hoverFilm = this.hoverFilm.bind(this);
        this.unhoverFilm = this.unhoverFilm.bind(this);

        this.state={
            hovered: false
        };
    }
    render() {
        return (
            <div className="md-film" onMouseEnter={this.hoverFilm} onMouseLeave={this.unhoverFilm}>
                <div className="md-film__image"
                     style={{backgroundImage: `url(${this.props.imagePath})`}}
                />
                <h1 className={['md-film__desc', this.state.hovered && 'md-film__desc--hover'].join(' ')}>{this.props.title}</h1>
            </div>
        );
    }
    hoverFilm(e){
        e.target.classList.add('md-film__image--hover');
        this.setState(()=>({
            hovered: true
        }));
    }
    unhoverFilm(e){
        e.target.classList.remove('md-film__image--hover');
        this.setState(()=>({
            hovered: false
        }));
    }
}


export default Films;