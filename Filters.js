import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { ListGroup, ListGroupItem } from 'reactstrap';

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
export default class Filters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoriesList = this.props.incomeDomainStore.categories.map((cat,index)=>{
      return <ListGroupItem key={index} className="categories-list-item" data-id={index} onClick={
        this.props.incomeDomainStore.getCategory
      }>{cat.name}</ListGroupItem>
    })
    return (
      <ul>
      {categoriesList}
      </ul>
    )
  }
}