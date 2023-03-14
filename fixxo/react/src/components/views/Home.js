import React from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import CollectionGrid from '../partials/CollectionGrid'
import Header from '../partials/Header'
import Showcase from '../partials/Showcase'

const Home = () => {
  const {getFeaturedAsync, getLatestAsync, GetPopularAsync} = useProductContext()

    useEffect(() => {
    
    
      return () => {
        
      }
    }, [])
    

  return (
    <>
        <Header />
        <Showcase />
        <CollectionGrid title="Featured Products" />
    </>
  )
}

export default Home