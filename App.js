import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ItemList from "./ItemList";
import Header from "./Header";
import HeaderSmall from "./HeaderSmall";
import Nav from "./Nav";
import CustomInput from "./CustomInput";
import { ListGroup, ListGroupItem } from "reactstrap";
import Order from "./Order";
import Banner from "./Banner";
import FrontPage from "./FrontPage";

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
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplayWidth: window.innerWidth,
      hidenComponent: "hiden-class",
      visibleComponent: "visible-class"
    };
  }
  handleWindowSizeChange = () => {
    this.setState({
      currentDisplayWidth: window.innerWidth
    });
  };
  UNSAFE_componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    addEventListener("resize", this.setClassOnComponent);
  }
  setClassOnComponent = () => {
    if (this.state.currentDisplayWidth <= 767) {
      this.setState({
        hidenComponent: "visible-class",
        visibleComponent: "hiden-class"
      });
    } else {
      this.setState({
        hidenComponent: "hiden-class",
        visibleComponent: "visible-class"
      });
    }
  };
  UNSAFE_componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    addEventListener("resize", this.setClassOnComponent);
  }
  setWindow = () => {
    const { qwe } = this.state;
    if (window.innerWidth < 500) {
      this.setState({
        hidenComponent: "visible-class",
      visibleComponent: "hiden-class"
      });
    } else {
      this.setState({
        hidenComponent: "hiden-class",
      visibleComponent: "visible-class"
      });
    }
  };
  componentDidMount() {
    this.setWindow();
    this.handleWindowSizeChange();
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
          <p>{this.state.isDesktop}</p>
          <p>{this.state.asd}</p>
          <Container>
            <Row>
              <Col>
                <Header className={this.state.visibleComponent} />
                <HeaderSmall className={this.state.hidenComponent} />
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomInput />
              </Col>
            </Row>
            <Route path="/" exact component={FrontPage} />
            <Row>
              <Col>
                <Route path="/order" component={Order} />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}
