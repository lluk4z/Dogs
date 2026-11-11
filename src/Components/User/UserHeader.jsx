import { useLocation } from 'react-router-dom'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'

const getTitle = (pathname) => {
    switch (pathname) {
        case '/conta/postar':
            return 'Poste Sua Foto';
        case '/conta/estatisticas':
            return 'Estatísticas';
        default:
            return 'Minha Conta';
    }
};

const UserHeader = () => {
    const { pathname } = useLocation();

    const title = getTitle(pathname);

    return (
        <header className={styles.header}>
            <h1 className='title'>{title}</h1>
            <UserHeaderNav />
        </header>
    )
}
export default UserHeader