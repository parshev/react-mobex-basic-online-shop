import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ItemList from "./ItemList";
import Header from "./Header";
import Nav from "./Nav";
import Filters from "./Filters";
import { BsSearch, BsLayoutTextWindow } from "react-icons/bs";

import { Container, Row, Col } from "reactstrap";
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

@inject("incomeDomainStore")
@observer
export default class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state={
      v:''
    }
  }
  cl=(event)=>{
    this.setState({
      v:event.target.value
    },()=>{
      this.props.incomeDomainStore.testVar = this.state.v;
    })  
  }
  render() {
    return (
      <Container className='custom-input-container'>
      <Row md={12}>
      <Col md={7}>
        <Input type='text' onChange={this.cl}/>
        </Col>
        < Col md={4}>
           <BsSearch className='icon-size' onClick={this.props.incomeDomainStore.testColnsolTestVal}/>
        </Col>
        <Col md={1}>
        <BsLayoutTextWindow className='icon-size' onClick={this.props.incomeDomainStore.switchLayout}/>
        </Col>
        </Row>
      </Container>
    );
  }
}