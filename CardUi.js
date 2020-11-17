import React, { Component } from "react";
import { GrAddCircle } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import {  BiLike } from "react-icons/bi";

import { observer, inject } from "mobx-react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";

@inject("incomeDomainStore")
@observer
export default class CardUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      total: 0
    };
  }
  likeItem=id=>{
    console.log(id);
    const item= this.props.incomeDomainStore.items.find(i=>{i.id===id});
    this.props.incomeDomainStore.wishItem.push(item);
  }
  pushItemToCart = () => {
    if(!this.props.incomeDomainStore.itemsIntoCart.includes(this.props.product)){
      console.log('not includes');
      ++this.props.product.quantity;
      this.props.incomeDomainStore.itemCounter += 1;
      this.props.incomeDomainStore.totalSum += parseInt(this.props.product.price);
      this.props.incomeDomainStore.itemsIntoCart.push(this.props.product);
    }else{
      ++this.props.product.quantity;
      this.props.incomeDomainStore.itemCounter += 1;
      this.props.incomeDomainStore.totalSum += parseInt(this.props.product.price);
    }
    localStorage.setItem('basket',JSON.stringify(this.props.incomeDomainStore.itemsIntoCart));
  };
  render() {
    return (
      <Card className="card-ui"
        style={{ width: this.props.incomeDomainStore.cardWidth }}
      >
      <CardImg top width="100%" src={this.props.product.url}/>
        <CardBody >
          <CardTitle>{this.props.product.name}</CardTitle>
          <CardSubtitle>category: {this.props.product.category}</CardSubtitle>
          <CardText>description: {this.props.product.desc}</CardText>
          <CardText>price: {this.props.product.price}</CardText>
          <GrAddCircle className='icon-size' onClick={this.pushItemToCart}/>
          <BiLike className='icon-size' onClick={this.likeItem.bind(this, this.props.product.id)}/>
        </CardBody>
      </Card>
    );
  }
}
