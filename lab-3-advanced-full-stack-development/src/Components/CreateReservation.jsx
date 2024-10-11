import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createReservation } from '../Services/ReservationService';
import Footer from "./Footer";
import Header from "./Header";

export default function CreateReservation() {

    const [noOfCustomers, setNoOfCustomers] = useState('');
    const [bookedDateTime, setBookedDateTime] = useState('');
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        await createReservation(noOfCustomers, bookedDateTime, name, phoneNo);
    }
    console.log(bookedDateTime);
    return (
        <div  className="container">
            <Header />
            <main className="grid-main">
                <h1 className="main-font">Reserve table</h1>

                <div className="page-content-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Number of customers</Form.Label>
                            <Form.Control 
                                type="number"
                                value={noOfCustomers} 
                                onChange={(e) => setNoOfCustomers(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select date and time for reservation</Form.Label>
                            <Form.Control 
                                type="datetime-local" 
                                value={bookedDateTime} 
                                onChange={(e) => setBookedDateTime(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={phoneNo} 
                                onChange={(e) => setPhoneNo(e.target.value)}
                                required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="btn-margin">Finish reservation</Button>
                    </Form>
                </div>
            </main>
            <Footer />
        </div>
    )
}