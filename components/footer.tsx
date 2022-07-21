import Link from 'next/link'
import styles from '../styles/components/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_content}>
        <Link href='/'>
          <a className={styles.footer_logo}>MetaZimba</a>
        </Link>
        <ul className={styles.footer_list}>
          <li>
            <Link href='https://layanjayasinghe.com' target='_blank'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Licensing</a>
            </Link>
          </li>
          <li>
            <Link href='https://layanjayasinghe.com' target='_blank'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <hr className={styles.footer_divider} />
      <span className={styles.copyrights}>
        © 2022{' '}
        <Link href='/'>
          <a>MetaZimba™</a>
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
