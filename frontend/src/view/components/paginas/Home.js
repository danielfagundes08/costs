import LinkButton from '../layout/LinkButton';
import { Container, Row, Col } from 'react-bootstrap';

import style from './css/Home.module.css';

import savings from '../../img/savings.svg';

function Home (){
    return (
        <section>
            <Container className={style.home_container}>
                <Row>
                    <Col xs="12">
                        <Col xs="12" className="text-center">
                            <h1 className="mt-5">Bem vindo ao <span>Costs</span></h1>
                        </Col>
                        <Col xs="12" className="text-center">
                            <p>Comece a gerenciar seus projetos agora mesmo!</p>
                        </Col>
                        <Col xs="12" className="text-center">
                            <LinkButton to="/novoProjeto" text="Criar Projeto"></LinkButton>
                        </Col>
                        <Col xs="12" className="text-center">
                            <img className={style.home_img} src={savings} alt="img"></img>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
        )
}

export default Home