import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Table } from "reactstrap";

@inject("incomeDomainStore")
@observer
export default class Cart extends Component {
  render() {
    return (
      <Table >
        <thead>
          <tr>
            <th> Name </th>
            <th> Price </th>
            <th> Quantity </th>
          </tr>
        </thead>
        <tbody>
          {this.props.incomeDomainStore.itemsIntoCart.map((item, index) => {
            return (
              <tr>
                <td className="order-list-item" key={index}>
                  {item.name}{" "}
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
        <tbody>
         <tr><td>total</td><td>{this.props.incomeDomainStore.totalSum}</td></tr>
        </tbody>
      </Table>
    );
  }
}
