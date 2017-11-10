import React from 'react';
import './sidebar.scss';


const Sidebar = (props) => {
    return (
        <div className="md-sidebar">
            <div className="md-sidebar__column">
                <i className="fa fa-th-list      md-sidebar__icon md-sidebar__main"
                   aria-hidden="true"
                   onClick={props.toggleSidebar}
                ></i>
                <i className="fa fa-film         md-sidebar__icon" aria-hidden="true"></i>
                <i className="fa fa-file-video-o md-sidebar__icon" aria-hidden="true"></i>
                <i className="fa fa-history      md-sidebar__icon" aria-hidden="true"></i>
                <i className="fa fa-question     md-sidebar__icon" aria-hidden="true"></i>
            </div>

            <div className="md-sidebar__column">
                {props.openSidebar &&
                <div className="md-sidebar__labels">
                    <div className="md-logo">
                        <div className="md-logo__logo-img"></div>
                        <div className="md-logo__logo-title">Logo</div>
                    </div>
                    <div className="md-sidebar__label">Movies</div>
                    <div className="md-sidebar__label">Tv-Shows</div>
                    <div className="md-sidebar__label">MyLibrary</div>
                    <div className="md-sidebar__label">Support</div>
                </div>
                }
            </div>
        </div>

    );
};


export default Sidebar;