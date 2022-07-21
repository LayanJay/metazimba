import Button from '../button'
import Container from '../container'
import styles from '../../styles/components/whats-new.module.css'
import { whatsNewArticles } from '../../lib/data'
import Image from 'next/image'

const WhatsNewArticles = () => {
  return (
    <Container>
      <div className={styles.title_container}>
        <h2 className={styles.title}>What&apos;s New</h2>
        <Button type='secondary'>Explore</Button>
      </div>
      <div className={styles.content_container}>
        <div className={styles.article_container}>
          {whatsNewArticles.map((article, i) => (
            <div key={i} className={styles.article_card}>
              <div className={styles.article_card_image_container}>
                <Image
                  className={styles.article_card_image}
                  src={article.image}
                  alt={article.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className={styles.article_card_content}>
                <p className={styles.article_card_platform_text}>
                  {article.platform}
                </p>

                <h3 className={styles.article_card_title}>{article.title}</h3>
                <p className={styles.article_card_desc}>
                  {article.description}
                </p>
                <div className={styles.article_publisher_container}>
                  <div className={styles.publisher_logo_container}>
                    <Image
                      className={styles.publisher_logo}
                      src={article.publisher_logo}
                      alt={article.publisher_name}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <p className={styles.publisher_name}>
                    {article.publisher_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.subscribe_card_container}>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              style={{ width: 24, height: 24 }}
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </span>
          <h4 className={styles.subscribe_title}>
            Subscribe to our newsletter
          </h4>
          <p className={styles.subscribe_desc}>
            Keep in touch with current gaming news and upcoming game releases.
          </p>
          <input
            className={styles.subscribe_email_input}
            type='email'
            placeholder='Your.email@here.com'
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </Container>
  )
}

export default WhatsNewArticles
