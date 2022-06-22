import styles from './HamburgerMenu.module.scss';
import { Sling as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import Link from 'next/link';

function HamburgerMenu({ logoClicked }) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isHamburgerMenuOpen ? 'hidden' : 'inherit';
  }, [isHamburgerMenuOpen]);

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [logoClicked]);

  const onNavClick = () => {
    setIsHamburgerMenuOpen(false);
  };

  return (
    <>
      <div className={styles.hamburgerMenuIcon}>
        <Hamburger
          role='button'
          toggled={isHamburgerMenuOpen}
          toggle={setIsHamburgerMenuOpen}
        />
      </div>

      {isHamburgerMenuOpen && (
        <div className={styles.hamburgerMenu}>
          <div className={styles.navItem} onClick={onNavClick}>
            <Link href='/o-mnie'>O MNIE</Link>
          </div>

          <Collapsible
            trigger={
              <div className={styles.navItem}>
                <a href='' className={styles.iconMargin}>
                  GRUPY
                </a>
              </div>
            }
          >
            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/grupy/grupa-przedszkolna'}>Przedszkolna</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/grupy/grupa-poczatkujaca'}>Początkująca</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/grupy/grupa-sredniozaawansowana'}>
                Średniozaawansowana
              </Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/grupy/grupa-zawodnicza'}>Zawodnicza</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/grupy/grupa-fitness'}>Fitness</Link>
            </div>
          </Collapsible>

          <Collapsible
            trigger={
              <div className={styles.navItem}>
                <a href='' className={styles.iconMargin}>
                  INFORMACJE
                </a>
              </div>
            }
          >
            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/informacje/harmonogram'}>Harmonogram</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/informacje/Slaski-Klub-Karate-Goliat'}>
                Śląski Klub Karate Goliat
              </Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/informacje/Oyama-Karate'}>Oyama Karate</Link>
            </div>

            <div className={styles.navItem} onClick={onNavClick}>
              <Link href={'/informacje/fitness'}>Fitness</Link>
            </div>
          </Collapsible>

          <div className={styles.navItem} onClick={onNavClick}>
            <Link href='/kontakt'>KONTAKT</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
