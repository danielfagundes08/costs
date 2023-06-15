import {Form} from 'react-bootstrap';

import styles from './css/Input.module.css';

function Input({type, text, name, placeholder, value, handleOnChange}) {
    return(
        <Form.Group className="mt-2 mb-3">
            <Form.Label htmlFor={name}>{text}</Form.Label>
            <Form.Control 
                className={styles.input_control}
                id={name} 
                type={type} 
                name={name}
                placeholder={placeholder} 
                value={value}
                onChange={handleOnChange}>
            </Form.Control>
        </Form.Group>
    )
}

export default Input;