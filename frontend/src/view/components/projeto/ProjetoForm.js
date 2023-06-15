import {Form, Container} from 'react-bootstrap';

import Input from '../form/Input';

import styles from './css/ProjetoForm.module.css';

import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjetoForm({btnText}){
    return (
        <Container className={styles.form_container}>
            <Form>
                <Input type="text" text="Nome do projeto:" name="name" placeholder="Insira o nome do projeto"></Input>
                <Input type="number" text="Orçamento do projeto:" name="valorTot" placeholder="Insira o orçamento total"></Input>
                <Select name="id_categoria" text="Selecione a categoria"></Select>
                <SubmitButton text={btnText}></SubmitButton>
            </Form>
        </Container>
    )
}

export default ProjetoForm;