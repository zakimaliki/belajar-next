import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const ModalCustome = ({
    children, modalType, name = "", price = 0, stock = 0, id
}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState({
        Name: name,
        Price: price,
        Stock: stock,
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
        console.log(data);;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (modalType == "create") {
            axios
                .post("http://localhost:8080/products", {
                    Name: data.Name,
                    Price: Number(data.Price),
                    Stock: Number(data.Stock),
                })
                .then((res) => {
                    alert("create successful");
                    setShow(false)
                    window.location.reload()
                })
                .catch((err) => {
                    alert("create failed");
                    setShow(false)
                });
        } else if (modalType == "update") {
            axios
                .put("http://localhost:8080/product/" + id, {
                    Name: data.Name,
                    Price: Number(data.Price),
                    Stock: Number(data.Stock),
                })
                .then((res) => {
                    alert("Update successful");
                    setShow(false)
                    window.location.reload()
                })
                .catch((err) => {
                    alert("Update failed");
                    setShow(false)
                });
        } else if (modalType == "delete") {
            axios
                .delete("http://localhost:8080/product/" + id)
                .then((res) => {
                    alert("delete successful");
                    setShow(false)
                    window.location.reload()
                })
                .catch((err) => {
                    alert("delete failed");
                    setShow(false)
                });
        }

    };

    if (modalType == "create") {
        return (
            <Fragment>
                <button
                    className="btn btn-success"
                    style={{ marginRight: "10px", marginBottom: "10px" }}
                    onClick={handleShow}
                >
                    {children}
                </button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{children}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <input
                                className="form-control mt-3"
                                type="text"
                                placeholder="name"
                                name="Name"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control mt-3"
                                type="text"
                                placeholder="stock"
                                name="Stock"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control mt-3"
                                type="text"
                                placeholder="price"
                                name="Price"
                                onChange={handleChange}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" id="button-addon2" title="Register">
                                {children}
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </Fragment>
        );
    }
    if (modalType == "update") {
        return (
            <Fragment>
                <button
                    className="btn btn-warning"
                    style={{ marginRight: "10px", marginBottom: "10px" }}
                    onClick={handleShow}
                >
                    {children}
                </button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{children}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <input
                                className="form-control mt-3"
                                type="text"
                                placeholder="name"
                                name="Name"
                                value={data.Name}
                                onChange={handleChange}
                            />
                            <input
                                className="form-control mt-3"
                                type="text"
                                placeholder="stock"
                                name="Stock"
                                value={data.Stock}
                                onChange={handleChange}
                            />
                            <input
                                className="form-control mt-3"
                                type="text"
                                placeholder="price"
                                name="Price"
                                value={data.Price}
                                onChange={handleChange}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" id="button-addon2" title="Register">
                                {children}
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </Fragment>
        )
    }
    if (modalType == "delete") {
        return (
            <Fragment>
                <button
                    className="btn btn-danger"
                    style={{ marginRight: "10px", marginBottom: "10px" }}
                    onClick={handleShow}
                >
                    {children}
                </button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{children}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <p>Are you sure want to delete this data?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" id="button-addon2" title="Register">
                                {children}
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </Fragment>
        )
    }
};

export default ModalCustome;