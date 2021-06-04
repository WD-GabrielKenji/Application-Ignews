import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';

export function SignInButton(){
    const isUserLoggedIn = true;
    // const isUserLoggedIn = false;

    return isUserLoggedIn ? ( // Logged
        <button 
            type="button"
            className={styles.singInButton}
        >
            <FaGithub color="#04d361"/>
            Name User...
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : ( // Not logged in
        <button 
            type="button"
            className={styles.singInButton}
        >
            <FaGithub color="#eba417"/>
            Sign in with GitHub
        </button>
    )
}