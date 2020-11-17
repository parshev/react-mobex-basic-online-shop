import React, { Component } from "react";
import { Badge } from "reactstrap";
import { Collapse, Button } from "reactstrap";
import { observer, inject } from "mobx-react";
import { CgRemove } from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import { Badge } from "reactstrap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";

@inject("incomeDomainStore")
@observer
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      itemsIntoCart: [],
      itemData: [],
      total: 0
    };
  }
  show = () => {
    this.state.itemData = [...this.props.incomeDomainStore.itemsIntoCart];
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
  };
  render() {
    return (
      <div className="cart-collaps">
        <span className="span-test">
          <GrCart className="icon-size" onClick={this.show} />
          <Badge>{this.props.incomeDomainStore.itemsIntoCart.length}</Badge>
        </span>
        <Collapse isOpen={this.state.isOpen}>
          <Card className="item">
            <CardBody className="card-into-cart">
              {this.props.incomeDomainStore.itemsIntoCart.map((item, index) => {
                return (
                  <div key={index}>
                    <Badge className="left-site-badge-Cart">
                      quantity: {item.quantity}
                    </Badge>
                    <br />
                    name:{item.name}
                    <br />
                    price: {item.price}
                    <span className='span-test' ><CgRemove
                      onClick={this.props.incomeDomainStore.removeItem.bind(
                        this,
                        item.id
                      )}
                    /></span>
                    <br />
                    <hr />
                    <hr />
                  </div>
                );
              })}
            </CardBody>
            <div> total:{this.props.incomeDomainStore.totalSum}</div>
          </Card>
        </Collapse>
      </div>
    );
  }
}
