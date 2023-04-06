import React, { useState, useEffect } from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import CollectionCard from './CollectionCard'

const CollectionGrid = ({title, items}) => {
  const {featured  } = useProductContext()
  return (
    <section className="collection-grid">
      <div className="container">
        <div className="title">{title}</div>
        <div className="collection"> 
          { featured.map(item => (<CollectionCard key={item.articleNumber} item={item} />)) }
        </div>
      </div>
    </section>
  )
}

export default CollectionGrid