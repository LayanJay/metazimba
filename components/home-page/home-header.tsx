import Image from 'next/image'
import styles from '../../styles/components/home-header.module.css'
import bgImage from '../../public/background-2.jpg'
import Container from '../container'
import Button from '../button'

const HomeHeader = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_bg_image}>
        <div className={styles.home_bg_image_overlay_1} />
        <div className={styles.home_bg_image_overlay_2} />
        <div className={styles.home_bg_image_overlay_3} />
        <Image
          style={{ zIndex: 0 }}
          src={bgImage}
          alt='background'
          placeholder='blur'
          priority
          layout='fill'
          objectFit='cover'
          objectPosition='top'
        />
      </div>
      <div className={styles.home_content}>
        <Container>
          <p className={styles.home_content_p}>Discover Games You Will Love</p>
          <h1 className={styles.home_content_h1}>
            Read About Games That You Enjoy
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button>Start Exploring</Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default HomeHeader
