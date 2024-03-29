import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">手机商城</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>购物车</Nav.Link>
                        <Nav.Link href="/login"><i className='fas fa-user'></i>登录</Nav.Link>
        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header