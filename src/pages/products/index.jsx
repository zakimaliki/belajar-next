import ModalCustome from '@/components/Modal'
import getProduct from '@/configs/redux/actions/productAction'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
    const dispatch = useDispatch()
    const { product } = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    return (
        <div className='container'>
            <ModalCustome modalType="create">Create</ModalCustome>
            <table class="table border" >
                <thead className="text-center">
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr key={item.ID} className="text-center">
                            <th scope="row">{index + 1}</th>
                            <td>{item.Name}</td>
                            <td>{item.Stock}</td>
                            <td>{item.Price}</td>
                            <td className="text-center">
                                <ModalCustome modalType="update" id={item.ID} name={item.Name} price={item.Price} stock={item.Stock}>update</ModalCustome>
                                <ModalCustome modalType="delete" id={item.ID} >delete</ModalCustome>

                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Products