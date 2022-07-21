import Container from '../container'
import Button from '../button'
import { trendingGames } from '../../lib/data'
import styles from '../../styles/components/trending-games.module.css'
import TrendingGameCard from './trending-game-card'

const TrendingGames = () => {
  return (
    <Container>
      <div className={styles.title_container}>
        <h2 className={styles.title}>Currently Trending Games</h2>
        <Button type='secondary'>More</Button>
      </div>
      <div className={styles.games_container}>
        {trendingGames.map((game, i) => (
          <TrendingGameCard key={i} {...game} />
        ))}
      </div>
    </Container>
  )
}

export default TrendingGames
