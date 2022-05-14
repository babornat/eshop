import {  } from "bootstrap";
import {Dropdown, Badge, Container, FormControl, Navbar, Nav, Button} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import {Link} from "react-router-dom";

const Header = () => {

    const {
     state: { cart },
        dispatch
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
                            {cart.length > 0 ?(
                                <>
                                {
                                    cart.map(prod =>(
                                        <span className="cartitem" key={prod.id}>
                                        <img
                                          src={prod.image}
                                          className="cartItemImg"
                                          alt={prod.name}
                                        />
                                        <div className="cartItemDetail">
                                          <span>{prod.name}</span>
                                          <span>CZK {prod.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete
                                          fontSize="20px"
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            dispatch({
                                              type: "REMOVE_FROM_CART",
                                              payload: prod,
                                            })}
                                        />
                                      </span>
                                    ))}
                    <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                  </>
                            ):(
<span style={{padding: 10}}>Cart is empty</span>
                            )}

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
    
};
export default Header;