import styles from './Footer.module.scss';
import logo from '../../../public/assets/urbexLogo.png';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <img
            src={logo.src}
            alt='logo'
            onClick={() => (document.location.href = '/')}
          />
        </div>
        <div className={styles.footerLinks}>
          <Link href='/przydatne-informacje'>
            <p>INFORMACJE</p>
          </Link>
          <Link href='/miejsca-na-urbex'>
            <p>MIEJSCA</p>
          </Link>
          <Link href='/ranking-miejsc-na-urbex'>
            <p>RANKING</p>
          </Link>
          <Link href='/o-nas'>
            <p>O NAS</p>
          </Link>
        </div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerBelt}></div>
        <Link href='/polityka-prywatnosci'>
          <p className={styles.policy}>polityka prywatności</p>
        </Link>
        <div className={styles.footerBelt}></div>
      </div>
    </footer>
  );
}

export default Footer;
