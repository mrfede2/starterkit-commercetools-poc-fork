import {useState}from 'react'
import { getProducts } from 'commercetools'

export default function Home() {
  const [products, setProducts] = useState([])

  const handleGetProducts = async () => {
    const _products = await getProducts()
    console.log(_products);
    
    setProducts(_products)
  }

  const handleClearProducts = () => {
    setProducts([])
  }

  return (
    <div>
      <h1>Products</h1>

      {
        !products.length ?
        <button onClick={handleGetProducts}>Get Products</button> :
        <button onClick={handleClearProducts}>Clear Products</button>
      }

      <ul>
        {
          products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))
        }
      </ul>
    </div>
  )
}
