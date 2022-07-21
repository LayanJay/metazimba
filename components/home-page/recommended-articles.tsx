import Button from '../button'
import Container from '../container'
import styles from '../../styles/components/recommended-articles.module.css'
import Image from 'next/image'

const RecommendedArticles = () => {
  return (
    <Container>
      <div className={styles.title_container}>
        <h2 className={styles.title}>Recommended Articles</h2>
        <div>
          <Button type='secondary'>More</Button>
        </div>
      </div>
      <div className={styles.article_container}>
        <div className={styles.article_card_elem_1}>
          <div className={styles.article_image_overlay} />
          <Image
            className={styles.article_image}
            src='/recommended/valorant.jpg'
            alt='Valorant twitch streamers are gaming the system with 24/7 streams that rank up viewers desperate for beta keys'
            layout='fill'
            objectFit='cover'
          />
          <div className={styles.article_content}>
            <h4 className={styles.article_title}>
              Valorant twitch streamers are gaming the system with 24/7 streams
              that rank up viewers desperate for beta keys
            </h4>
            <p className={styles.article_desc}>
              If you take a look at many of Twitch&apos;s top Valorant streams
              right now, you will note that they claim to be running
              &quot;24/7&quot;
            </p>
          </div>
        </div>

        <div className={styles.article_card_elem_2}>
          <div className={styles.article_image_overlay} />
          <Image
            className={styles.article_image}
            src='/recommended/fade-valorant.jpg'
            alt='Is Valorant getting a TV show?'
            layout='fill'
            objectFit='cover'
          />
          <div className={styles.article_content_elem_2}>
            <h4 className={styles.article_title_elem_2}>
              Is Valorant getting a TV show?
            </h4>
          </div>
        </div>
        <div className={styles.article_card_elem_2}>
          <div className={styles.article_image_overlay} />
          <Image
            className={styles.article_image}
            src='/recommended/Call-of-Duty.jpg'
            alt='Marketing partnership between Call of Duty and PlayStation can cover three more games'
            layout='fill'
            objectFit='cover'
          />
          <div className={styles.article_content_elem_2}>
            <h4 className={styles.article_title_elem_2}>
              Marketing partnership between Call of Duty and PlayStation can
              cover three more games
            </h4>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default RecommendedArticles
