import {  } from "bootstrap";
import {Dropdown, Badge, Container, FormControl, Navbar, Nav} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/Context";
import {Link} from "react-router-dom";

const Header = () => {

    const {
     state: { cart },
        
      } = CartState();

    return (
        <Navbar bg="dark" variant="dark" style={{height : 80}}>
            <Container>
                <Navbar.Brand>
                    <Link to ="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl style={{width:500}}
                     placeholder="Search a product"
                     className="m-auto">

                    </FormControl>

                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                          <FaShoppingCart color="white" fontsize="25px"/>
                                <Badge>{cart.length}</Badge>
                           
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minwidth:370}}>
<span style={{padding: 10}}>Cart is empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
    
};
export default Header;