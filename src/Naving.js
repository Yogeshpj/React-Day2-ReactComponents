import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Naving() {
  return (
    <div>
      
     <Navbar bg="primary" variant="dark">
        <Container>
        <img
              src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-what-you-need-know-before-rebranding-11.png"
              width="40"
              height="40"
            
              className="d-inline-block align-top"
              alt=""
            />

          <Navbar.Brand href="#home">  Iphone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.apple.com/in/iphone/?afid=p238%7CsnTdg5ZpO-dc_mtid_209254ho67063_pcrid_650433757859_pgrid_135363319397_pexid__&cid=wwa-in-kwgo-iphone-slid----Avail-">Home</Nav.Link>
            <Nav.Link href="https://www.pocket-lint.com/apple-iphone-14-pro-max-review/">Reviews</Nav.Link>
            <Nav.Link href="https://www.gadgets360.com/mobiles/apple-price-list">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <div >
      <img style={{width:'600px',height:'600px'}} src='https://as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1635202842000' alt=''/>
    
    </div>
    </div>
  )
}

export default Naving