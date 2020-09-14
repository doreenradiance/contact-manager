import React from 'react';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default" id="navbar">
                <div className="container-fluid container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">CONTACT MANAGER</a>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-right">
                            <li><a href="#">CONTACT LIST</a></li>
                            <li><a href="#">NEW CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}
export default Navbar;