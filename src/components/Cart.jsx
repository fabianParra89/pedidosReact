import { Container, Table } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


export const Cart = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const { items, removeItem, clear } = useContext(CartContext)
    const total = () =>
        items.reduce((acumulador, valorActual) =>
            acumulador + valorActual.quantity * valorActual.price, 0
        )

    const handleChange = (ev) => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items: items,
            total: total(),
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                setFormValues({
                    name: "",
                    phone: "",
                    email: "",
                })
                clear()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `su orden: " + ${id} + " ha sido completada`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        });
    }

    return (
        (!(items.length > 0)) ?
            <Container>
                <div className="cart-Empty">
                    <span>Por favor seleccioné algun produto del menú para contiuar con el pedido</span>
                    <Link to={"/"}>
                        <Button variant="primary">Regresar al menú</Button>
                    </Link>
                </div>
            </Container>
            :
            <Container>
                {/* <h1>Cart</h1> */}
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Nombre</th>
                            <th></th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td><img src={item.imageId} className="img-cart" /></td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <Button onClick={() => removeItem(item.id)} variant="primary">Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>{total()}</td>
                            <td></td>
                            <td></td>
                            <th></th>
                        </tr>
                    </tfoot>
                </Table>
                <div className="title-form-buyer">
                    <span>Datos del comprador</span>
                </div>
                <Form className="form-buyer">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Nombre"
                        onChange={handleChange}
                        value={formValues.name}
                        type="text"
                        name="name"
                    />
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control placeholder="Teléfono"
                        onChange={handleChange}
                        value={formValues.phone}
                        type="text"
                        name="phone"
                    />
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control placeholder="Enter email"
                            onChange={handleChange}
                            value={formValues.email}
                            type="email"
                            name="email"
                        />
                    </Form.Group>
                </Form>
                <div className="button-buy">
                    <Link to={"/"}>
                        <Button variant="primary">Ir al menú</Button>
                    </Link>
                    <Button onClick={sendOrder} variant="primary">Confirmar pedido</Button>
                </div>
            </Container>

    )

}