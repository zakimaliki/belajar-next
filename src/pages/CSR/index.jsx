import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CSR = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then((res) => {
                setProducts(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>{JSON.stringify(products)}</div>
    )
}

export default CSR