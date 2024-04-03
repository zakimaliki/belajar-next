import axios from 'axios'
import React from 'react'

export async function getStaticProps() {
    const res = await axios.get("http://localhost:8080/products");
    return {
        props: { products: res.data.data },
    };
}

const SSG = ({ products }) => {
    return (
        <div>{JSON.stringify(products)}</div>
    )
}

export default SSG