// import React, { useState } from "react";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";
// import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
// import { Container, Row, Col } from "reactstrap";


// @inject("incomeDomainStore")
// @observer
// const Nav = props => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(prevState => !prevState);
//   const changeHandler = (event) =>{this.props.incomeDomainStore.input = event.target.value}
  

//   return (
//     <Container>
//       <Row md={12}>
//         <Col >
//           <InputGroup>
//             <InputGroupAddon addonType="prepend">
//               <InputGroupText>search</InputGroupText>
//             </InputGroupAddon>
//             <Input placeholder="look here" onChange={this.changeHandler}/>
//           </InputGroup>
//         </Col>
//          <Col >
//           <Button className="button-color-all" onClick ={console.log('test')}>search</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Nav;
