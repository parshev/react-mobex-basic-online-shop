import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ItemList from "./ItemList";
import Header from "./Header";
import Nav from "./Nav";
import CustomInput from "./CustomInput";
import { ListGroup, ListGroupItem } from "reactstrap";
import Order from "./Order";

import Filters from "./Filters";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
@inject("incomeDomainStore")
@observer
export default class FrontPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.incomeDomainStore.initList();
    this.props.incomeDomainStore.itemsIntoCart =
      JSON.parse(localStorage.getItem("basket")) || [];
    this.props.incomeDomainStore.itemsIntoCart.forEach(item => {
      this.props.incomeDomainStore.totalSum += parseInt(
        item.price * item.quantity
      );
    });
    // console.log(JSON.parse(localStorage.getItem('basket')))
  }
  render() {
    return (
      <Router>
        <div>
          <Row>
            <Col md={3}>
              <Route path={"/"} component={Filters} />
            </Col>
            <Col md={9}>
              <Route path={"/"} component={ItemList} />
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}
