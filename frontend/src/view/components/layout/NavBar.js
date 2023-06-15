import { Container, Nav, Navbar} from 'react-bootstrap';
import styles from './css/NavBar.module.css';

import logo from '../../img/costs_logo.png';

function NavBar (){
    return (
        <Navbar className={`${styles.navbar_bg} ${styles.navbar}`} expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img className={styles.navbar_logo} alt="logo" src={logo}></img>
                </Navbar.Brand>
                <Navbar.Toggle className={styles.navbar_toggler_style} aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className={styles.navbar_collapse} id="responsive-navbar-nav">
                    <Nav as="ul" className={`${styles.navbar_nav} "me-auto"`}>
                        <Nav.Item as="li">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/projetos">Projetos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/sobre">Sobre</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/contato">Contato</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;