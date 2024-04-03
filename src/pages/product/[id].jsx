import { useRouter } from 'next/router'
import React from 'react'

const ProductDetail = () => {
    const router = useRouter();
    return (
        <>
            <h1>Product Detail</h1>
            <p>ID : {router.query.id}</p>
        </>

    )
}

export default ProductDetail