import axios from "axios";
const updateProduct = (id, data, setShow) => async (dispatch) => {
    try {
        const products = await axios.put("http://localhost:8080/product/" + id, {
            Name: data.Name,
            Price: Number(data.Price),
            Stock: Number(data.Stock),
        });
        alert("update product successful");
        setShow(false);
        const result = products.data.data;
        dispatch({ type: "UPDATE_PRODUCT", payload: result });
    } catch (err) {
        console.error(err.message);
        alert("update product failed");
        setShow(false);
    }
};

export default updateProduct;