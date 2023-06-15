import {Button} from 'react-bootstrap';

import styles from './css/SubmitButton.module.css';

function SubmitButton({text}){
    return(
        <Button className={styles.form_button}>{text}</Button>
    )
}

export default SubmitButton;