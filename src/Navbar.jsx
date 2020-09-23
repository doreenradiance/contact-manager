import React from 'react';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default" id="navbar">
                <div className="container-fluid container">
                    <div className="navbar-header">
                        <p style={{color: "blue", textDecoration:'underline', }}>CONTACT MANAGER</p>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-right">
                            <li><p style={{color: "blue", textDecoration:'underline',}} >CONTACT LIST</p></li>
                            <li><p style={{color: "blue", textDecoration:'underline',}} >NEW CONTACT</p></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}
export default Navbar;