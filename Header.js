import React, { Component } from "react";
import MyProShop from "./MyProShop";
import Cart from "./Cart";
import { Container, Row, Col, Button, Badge } from "reactstrap";
import { VscAccount } from "react-icons/vsc";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import {Link} from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject("incomeDomainStore")
@observer
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  //kolichkata , potrebitel (my accoutn setting )//---dropdown
  render() {
    return (
      <Container className={this.props.className}>
        <Row sm={12}>
          <Col>
            <h1>
              <center>Pro Shop</center>
            </h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <MyProShop
              name={<span className="span-test"><VscAccount className='icon-size' color="black" /></span>}
              myOrder="my order"
              msgCenter="message center"
              wish="wish list"
            />
          </Col>
          <Col md={3}>
            <Cart />
          </Col>
          <Col md={3}>
            <span className="span-test"><MdFavoriteBorder className='icon-size'/><Badge>{this.props.incomeDomainStore.wishItem.length}</Badge></span>
          </Col>
          <Col md={3}>
            <span className="span-test"><Link to='/' ><FaShopify className='icon-size' /></Link></span>
          </Col>
        </Row>
        <hr />
        <br />
      </Container>
    );
  }
}
