import { Container, Col, Row} from 'react-bootstrap';
import styles from './css/Footer.module.css';

import {FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer_bg}>
            <Container>
                <Row>
                    <Col xs="12" sm="6">
                        <ul className={styles.social_list}>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://github.com/danielfagundes08"><FaGithub/></a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/danielstheboy_/"><FaInstagram/></a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daniel-fagundes-b7a7b4224/"><FaLinkedin/></a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs="12" sm="6" className={styles.copyright}>
                        <p><span>Costs</span>&copy; 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer