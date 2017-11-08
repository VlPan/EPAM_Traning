import React from 'react';
import './logo.scss';


class Logo extends React.Component {
    render() {
        return (
            <div className="md-logo">
                <div className="md-logo__logo-img"></div>
                <div className="md-logo__logo-title">Logo</div>
            </div>
        );
    }
}

export default Logo;