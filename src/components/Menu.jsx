import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const menuItems = [
    {"id": 1, "name": "Home", "href": "/", "submenu": []},
    {"id": 2, "name": "Guidelines", "href": "#guidelines", "submenu": [{colors: {header: "red", paragraph: "black", footer: "black"}, fonts: {header: "Arial", paragraph: "Times New Roman", footer: "Arial Narrow"}}]},
    {"id": 3, "name": "About", "href": "#about", "submenu": []}
];

const menuStructure = [];
menuItems.forEach(item => {
    if (item.submenu === []){
        menuStructure.push(
            <li className="nav-item">
                <a className="nav-link" href={item.href}>{item.name}</a>
            </li>
        )
    } else {
        menuStructure.push(
            <li className="nav-item dropdown">
                <a className="nav-link" href={item.href}>{item.name}</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                    {item.submenu.forEach( menu => {
                        <a className="dropdown-item" href="#">1</a>
                    })}
                </div>
            </li>
        )
    }
});
 
export default class Menu extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Menu</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
          <ul className="navbar-nav mr-auto">
            {menuStructure}
          </ul>
          <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        </nav>
      );
    }
  }
  