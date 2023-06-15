import { Button,  } from 'react-bootstrap';

import styles from './css/LinkButton.module.css';

function LinkButton({to, text}){
    return (
        <Button className={styles.link_button} href={to} variant="outline-secondary">{text}</Button>
    )
}

export default LinkButton