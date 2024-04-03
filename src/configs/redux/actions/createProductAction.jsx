import axios from "axios";
const createProduct = (data, setShow) => async (dispatch) => {
    try {
        const products = await axios.post("http://localhost:8080/products", {
            Name: data.Name,
            Price: Number(data.Price),
            Stock: Number(data.Stock),
        });
        alert("crate product successful");
        setShow(false);
        const result = products.data.data;
        dispatch({ type: "CREATE_PRODUCT", payload: result });
    } catch (err) {
        console.error(err.message);
        alert("crate product failed");
        setShow(false);
    }
};

export default createProduct;