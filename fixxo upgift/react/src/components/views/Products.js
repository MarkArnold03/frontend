import React, {useEffect} from 'react'
import Header from '../partials/Header'
import Breadcrumb from '../partials/Breadcrumb'
import CollectionGrid from '../partials/CollectionGrid'
import Footer from '../partials/Footer'

const Products = () => {
  const { all, getAllAsync} = useProductContext()

  useEffect(() => {
    getAllAsync()
  }, []) 

  return (
    <>
      <Header />
      <Breadcrumb currentPage="Products" />
      <CollectionGrid title="Products" url="https://kyh-net22.azurewebsites.net/api/products" />
      <Footer />
    </>
  )
}

export default Products