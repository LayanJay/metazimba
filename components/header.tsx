import Link from 'next/link'
import styles from '../styles/components/header.module.css'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a className={styles.nav_logo}>MetaZimba</a>
      </Link>
      <button type='button' className={styles.nav_menu_button}>
        <svg
          style={{ width: '24px', height: '24px' }}
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      <div className={styles.nav_list_container}>
        <ul className={styles.nav_list}>
          <li>
            <Link href='/'>
              <a className={styles.nav_list_item}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='https://layanjayasinghe.com' target='_blank'>
              <a className={styles.nav_list_item}>About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className={styles.nav_list_item}>Services</a>
            </Link>
          </li>
        </ul>
        <div className={styles.nav_search_input_container}>
          <div className={styles.nav_search_input_icon}>
            <svg
              style={{ width: '20px', height: '20px' }}
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
          <input
            type='text'
            className={styles.nav_search_input}
            placeholder='Search...'
          />
        </div>
      </div>
    </nav>
  )
}

export default Header
