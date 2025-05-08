import { useState } from "react";
import HeaderWithCounter from "../components/HeaderWithCounter";
import { products } from "../data/products";
import './ProductCatalog.css'
import Product from "../components/Product";
import Search from "../Search/Search";


const ProductCatalog = () => {
    const [data, setData] = useState(products)
    let itemsCount = data.length;
    let titleText = 'Prekes'

    const initData = () => {
        setData(products);
    }

    const updateData = (newData) => {
        setData(newData)
    }

    const deleteProductFromData = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    return(
        <div className="catalogContainer">
            <HeaderWithCounter count={itemsCount} title={titleText}/>
            <Search
              items={data}
              onSearchButtonClick={updateData}
              onRessetButtonClick={initData}
            />
            {
                data.map((item, index) => {
                   return <Product key={index} product={item} onDeleteAction={deleteProductFromData}/>
                })
            }
        
        </div>
    )
};

export default ProductCatalog;