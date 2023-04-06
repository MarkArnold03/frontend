import React from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import CollectionCard from './CollectionCard'

const LatestProducts = () => {
    const {latest} = useProductContext()
  return (
    <section className="latestproducts">
      <div className="latestcontainer"> 
        <div className="column-1">
            <div className="content">
                <div className="title-2">2 FOR USD $29</div>
                 <a className="btn-offer" href="#">{title}</a>
            </div>
        </div>
        <div className="column-2">
        
            <div className="container">
                  <div  className="product-grid">
                  { latest.map(item => (<CollectionCard key={item.articleNumber} item={item} />)) }       
                  </div>
              </div>
            </div>
        </div>
</section>
  )
}

export default LatestProducts