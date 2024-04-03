import axios from 'axios'
import React from 'react'

export async function getServerSideProps() {
    const res = await axios.get("http://localhost:8080/products");
    return {
        props: { products: res.data.data },
    };
}

const SSR = ({ products }) => {
    return (
        <div>{JSON.stringify(products)}</div>
    )
}

export default SSR