import styles from './style.module.scss';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import { FormLogin } from './components/formLogin';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.logoWrapper}>
          <Image
            src={logo}
            alt="logo"
            fill
            className={styles.logo}
          />
        </div>
        <div className={styles.welcome}>
          <h2 className={styles.subtitle}>Bem-vindo de volta</h2>
          <p className={styles.paragraph}>Entre com sua conta para acessar o painel.</p>
        </div>
        <FormLogin />
      </div>
    </div>
  );
}
