import React, { useEffect } from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import CollectionGrid from '../partials/CollectionGrid'
import EndPart from '../partials/EndPart'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import Middlepart from '../partials/Middlepart'
import Showcase from '../partials/Showcase'

const Home = () => {
  const { featured, latest, popular, getFeaturedAsync, getLatestAsync, getPopularAsync } = useProductContext()

  useEffect(() => {
    getFeaturedAsync()
    getLatestAsync()
    getPopularAsync()
  }, [])

  return (
    <>
        <Header />
        <Showcase />
        <CollectionGrid title="Featured Products" />
        <Middlepart />
        <LatestProducts title="New Products" />
        <PopularProducts title="Popular Products"/>
        <EndPart />
        <Footer />
        
    </>
  )
}

export default Home