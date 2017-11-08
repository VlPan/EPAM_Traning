import React from 'react';
// import ReactDOM from 'react-dom';
import Icons from './Icons/icons';
import './sidebar.scss';


class Sidebar extends React.Component {
    constructor(props){
        super(props);
       // this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
        // this.state = {
        //     openSideBar: this.props.openSidebar
        // };
    }
    // componentDidMount(){
    //     this.sidebarNode = ReactDOM.findDOMNode(this).querySelector('.md-sidebar');
    // }
    render() {
        return (
            <div className={['md-sidebar',
                            'md-sidebar--black-body',
                            this.props.openSidebar ? 'md-sidebar--big-width' : 'md-sidebar--small-width'].join(' ')}>
                <Icons toggleSidebar = {this.props.toggleSidebar}
                       openSidebar = {this.props.openSidebar}
                />
            </div>
        );
    }
    // handleOpenSidebar(){
    //     console.log(this.props.openSidebar);
    //     if(this.props.openSidebar){
    //         ReactDOM.findDOMNode(this).style.width = '192px';
    //     }else{
    //         if(ReactDOM.findDOMNode(this)) {
    //             ReactDOM.findDOMNode(this).style.width = '65px';
    //         }
    //     }
    // }
}


export default Sidebar;