import React, { Component } from "react";
import {
  UncontrolledButtonDropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class MyProShop extends Component {
  render() {
    return (
      <UncontrolledButtonDropdown>
        <DropdownToggle
          style={{ backgroundColor: "white", border: "none" }}
          caret
          color="black"
        >
          {this.props.name}
        </DropdownToggle>
        <DropdownMenu>
          <h5>
            <center>wellcome to ProShop</center>
          </h5>
          <hr />
          <Link to='/order'><DropdownItem>Order</DropdownItem></Link>
          <DropdownItem>Wishlist</DropdownItem>
          <DropdownItem>GiftCard</DropdownItem>
          <DropdownItem>ContactUs</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  }
}

export default MyProShop;
