import { Container, Row, Col } from 'react-bootstrap';
import styles from './css/NovoProjeto.module.css';

import ProjetoForm from '../projeto/ProjetoForm';

function NovoProjeto(){
    return(
        <section>
            <Container className={styles.novoProjeto_container}>
                <Row>
                    <Col xs="12" className="text-center">
                        <Col>
                            <h1 className="mt-5">Criar Projeto</h1>
                        </Col>
                        <Col>
                            <p>Crie seu projeto para depois adicionar os serviços</p>
                        </Col>
                    </Col>
                </Row>
            </Container>       
            <ProjetoForm btnText="Criar Projeto"/>
        </section>
    )
}

export default NovoProjeto;