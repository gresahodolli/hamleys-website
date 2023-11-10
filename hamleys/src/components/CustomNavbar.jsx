import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'


function CustomNavbar() { 
  return (
    <Navbar expand="lg" className="navbar-custom" style={{ backgroundColor: 'red', color: 'white', height: '100px' }}>
    <Container fluid>
      <Navbar.Brand href="#">
        <img src='https://www.imageinsight.com/wp-content/uploads/2022/11/Hamleys-logo.svg' style={{width:'120px', height: '50px'}}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <NavDropdown title="Shop Toys" id="navbarScrollingDropdown" style={{ color: 'white' }} >

            {/* By Price Point */}
            <NavDropdown title="By Price Point" drop="end" className="nav-white-text">
              <NavDropdown.Item href="#20undUnder" style={{ width: '150px' }}>$20 and Under</NavDropdown.Item>
              <NavDropdown.Item href="#20to50" style={{ width: '150px' }}>$20 to $50</NavDropdown.Item>
              <NavDropdown.Item href="#50to100" style={{ width: '150px' }}>$50 to 100</NavDropdown.Item>
              <NavDropdown.Item href="#200andAbove" style={{ width: '150px' }}>$100 and above</NavDropdown.Item>
            </NavDropdown>

            {/* Games & Puzzles */}
            <NavDropdown title="Games & Puzzles" drop="end">
              <NavDropdown.Item href="#boardGames">Board Games</NavDropdown.Item>
              <NavDropdown.Item href="#otherGames">Other Games</NavDropdown.Item>
              <NavDropdown.Item href="#puzzles">Puzzles</NavDropdown.Item>
            </NavDropdown>

            {/* Lego & Construction */}
            <NavDropdown title="Lego & Construction" drop="end">
              <NavDropdown.Item href="#lego">LEGO</NavDropdown.Item>
              <NavDropdown.Item href="#playmobil">Playmobil</NavDropdown.Item>
              <NavDropdown.Item href="#otherConstruction">Other Construction</NavDropdown.Item>
            </NavDropdown>

            {/* Sports and Leisure */}
            <NavDropdown title="Sports and Leisure" drop="end" >
              <NavDropdown.Item href="#rideOns">RideOns</NavDropdown.Item>
              <NavDropdown.Item href="#indoorSports">Indoor Sports</NavDropdown.Item>
              <NavDropdown.Item href="#outdoorSports">Outdoor Sport</NavDropdown.Item>
            </NavDropdown>
            </NavDropdown>

            <NavDropdown title="New Year's Eve" id="navbarScrollingDropdown" style={{ color: 'white' }}  >
            </NavDropdown>

            <NavDropdown title="By Age" id="navbarScrollingDropdown">
                <Nav className="justify-content-between" fill>
                  <NavDropdown.Item href="#0-12months">
                  <img 
                    src="https://www.steiff.com/img/1800/2232/resize/catalog/product/s/o/soft-cuddly-friends-jimmy-teddybaer-113512-4.jpg" 
                    alt="0-12 months" 
                    style={{ width: '70px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px', color:'black'}}>0-12 months</p>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#1-2years">
                  <img 
                    src="https://rukminim1.flixcart.com/image/850/1000/kt1u3rk0/stuffed-toy/b/7/r/4-feet-red-teddy-bear-120-kiddietown-original-imag6h7vhw2mfwvj.jpeg?q=90" 
                    alt="1-2 years" 
                    style={{ width: '60px', height: '60px', color:'black' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px' }}>1-2 years</p>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#3-4years">
                  <img 
                    src="https://i.ebayimg.com/images/g/q3QAAOSwUNhjK06u/s-l1600.jpg" 
                    alt="3-4 years" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px', color:'black' }}>3-4 years</p>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#5-6years">
                    <img 
                    src="https://5.imimg.com/data5/SELLER/Default/2021/8/CX/JC/AN/14770395/die-1-500x500.jpg" 
                    alt="5-6 years" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px', color:'black' }}>5-6 years</p>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#7-9years">
                  <img 
                    src="https://www.conisbroughcastle.org.uk/images/toys/playmobil-knights-castle.jpg" 
                    alt="7-9 years" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px',color:'black' }}>7-9 years</p>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#10+">
                    <img 
                    src="https://i.pinimg.com/564x/a2/55/36/a25536443db807c5264221f1ea1511f5.jpg" 
                    alt="10+" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  <p style={{ margin: 0, fontSize: '15px', color:'black' }}>10+</p>
                  </NavDropdown.Item>
                </Nav>
              </NavDropdown>



            <NavDropdown title="By Brand" id="navbarScrollingDropdown">
                <Nav className="justify-content-between" fill>
                  <NavDropdown.Item href="#hamleys">
                  <img 
                    src="data:image/png;base64,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"
                    alt="hamleys" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#lego">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Lego_logo.png" 
                    alt="lego" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#yellyCaat">
                  <img 
                    src="https://www.thats-mine.co.uk/wp-content/uploads/2019/02/jellycat-2.jpg" 
                    alt="yellyCat" 
                    style={{ width: '60px', height: '60px' }}
                  />
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#disney">
                    <img 
                    src="https://i0.wp.com/magzoid.com/wp-content/uploads/2021/11/disney-logo-2.jpg?fit=684%2C482&ssl=1" 
                    alt="disney" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#harryPotter">
                  <img 
                    src="https://mystickermania.com/cdn/stickers/harry-potter/harry-potter-title-512x512.png" 
                    alt="harryPotter" 
                    style={{ width: '60px', height: '60px' }}
                  />
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#barbie">
                    <img 
                    src="https://logowik.com/content/uploads/images/barbie3338.logowik.com.webp" 
                    alt="barbie" 
                    style={{ width: '60px', height: '60px' }}
                  /> 
                  </NavDropdown.Item>
                </Nav>
              </NavDropdown>

            <NavDropdown title="Offers" id="navbarScrollingDropdown">
            </NavDropdown>

            <NavDropdown title="Gaming" id="navbarScrollingDropdown">
            </NavDropdown>
       
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar; // Export the renamed functional component
