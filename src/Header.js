import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends React.Component {
    render() {
        return (
            <header>
                <NavLink exact activeClassName="current-page" to="/">
                    Home
                </NavLink>
                <NavLink exact activeClassName="current-page" to="/quotes">
                    Search
                </NavLink>
                <hr />
            </header>
        )
    }
})