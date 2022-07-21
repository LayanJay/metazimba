import type { NextPage } from 'next'
import HomeHeader from '../components/home-page/home-header'
import RecommendedArticles from '../components/home-page/recommended-articles'
import TrendingGames from '../components/home-page/trending-games'
import WhatsNewArticles from '../components/home-page/whats-new-articles'

const Home: NextPage = () => {
  return (
    <>
      <HomeHeader />
      <TrendingGames />
      <RecommendedArticles />
      <WhatsNewArticles />
    </>
  )
}

export default Home
