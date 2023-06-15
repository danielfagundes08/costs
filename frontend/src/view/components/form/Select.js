import {Form} from 'react-bootstrap';

import styles from './css/Select.module.css';

function Select({text, name, options, handleOnChange, value}) {
    return(
        <Form.Group className="mt-2 mb-3">
            <Form.Label htmlFor={name}>{text}</Form.Label>
            <Form.Select 
                className={styles.select_control}
                id={name}  
                name={name}>
                    <option disabled selected>Selecione uma opção</option>
            </Form.Select>
        </Form.Group>
    )
}

export default Select;