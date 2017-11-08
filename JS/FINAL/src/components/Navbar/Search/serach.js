import React from 'react';
import './search.scss';


class SearchInput extends React.Component {
    constructor(props){
        super(props);
        this.filterFilmsByTitle = this.filterFilmsByTitle.bind(this);
    }
    render() {
        return (
            <div className="md-search">
                <div className="md-search__box">
                    <i className="fa fa-ravelry md-search__icon" aria-hidden="true"></i>
                </div>
                <input onKeyUp={this.filterFilmsByTitle}
                       type="text" placeholder="Search"
                       className="md-search__input"
                       name="title"/>
            </div>
        );
    }
    filterFilmsByTitle(e){
        const filmTitle = e.target.value;
        this.props.filterFilmsByTitle(filmTitle);
    }

}


export default SearchInput;