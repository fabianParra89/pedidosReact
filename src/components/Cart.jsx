import { Container, Table } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Form from 'react-bootstrap/Form';


export const Cart = () => {

    const[formValues, setFormValues] = useState({
        name:"",
        phone:"",
        email:"",
    })
    const { items, removeItem, clear} = useContext(CartContext)
    const total = () =>
        items.reduce((acumulador, valorActual) =>
            acumulador + valorActual.quantity * valorActual.price, 0
        )

    const handleChange = (ev)=>{
        setFormValues(prev=>({
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
                    name:"",
                    phone:"",
                    email:"",
                })
                clear()
                alert("su orden: " + id + " ha sido completada");
            }
        });
    }
    console.log(items)
    return (
        <Container>
            <h1>Cart</h1>

            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={() => removeItem(item.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{total()}</td>
                        <th></th>
                    </tr>
                </tfoot>
            </Table>
            <Form>
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
                    <Form.Control  placeholder="Enter email"
                    onChange={handleChange}
                    value={formValues.email}
                    type="email"
                    name="email"
                    />
                </Form.Group>
            </Form>

            <button onClick={sendOrder}>Comprar</button>

        </Container>
    )

}