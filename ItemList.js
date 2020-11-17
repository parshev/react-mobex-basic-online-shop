import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import CardUi from "./CardUi";
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

@inject("incomeDomainStore")
@observer
export default class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.incomeDomainStore.categoriesList.map((item, index) => {
          return (
              <CardUi key={index} product={item} />
          );
        })}
      </React.Fragment>
    );
  }
}
