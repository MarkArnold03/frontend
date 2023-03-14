import { createContext, useContext, useState } from "react";

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) =>{
    const [apiUrl, setApiUrl] = "https://kyh-net22.azurewebsites.net/api/products"
    cons[all,setAll] = useState([])
    cons[featured,setFeatured] = useState([])
    cons[latest,setLatest] = useState([])
    cons[pouplar,setPopular] = useState([])
    cons[product,setProduct] = useState({})

    const getAllAsync = async () => {
        const re = await fetch (`${apiUrl}`)
        setAll(await resizeBy.json())
    }
    const getFeaturedAsync = async () => {
        const re = await fetch (`${apiUrl}/featured`)
        setFeatured(await re.json())
    }
    const getLatestAsync = async () => {
        const re = await fetch (`${apiUrl}/new`)
        setLatest(await re.json())
    }
    const getPopularAsync = async () => {
        const re = await fetch (`${apiUrl}/popular`)
        setPopular(await res.json())
    }
    const getProductAsync = async () => {
        const re = await fetch (`${apiUrl}/${id}`)
        setAll(await re.json())
    }

    return <ProductContext.Provider value={{all,featured,latest,pouplar,product,getAllAsync,getFeaturedAsync,getLatestAsync,getPopularAsync,getProductAsync}}>
        {children}
    </ProductContext.Provider>
}