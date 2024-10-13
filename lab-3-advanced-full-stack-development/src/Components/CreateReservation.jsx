import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createReservation, checkAvailableTables } from '../Services/ReservationService';
import { ConfirmedReservation } from "./ConfirmedReservation";
import { ChooseTable } from "./ChooseTable";

export default function CreateReservation() {

    const [noOfCustomers, setNoOfCustomers] = useState('');
    const [bookedDateTime, setBookedDateTime] = useState('');
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [availableTables, setAvailableTables] = useState(null);
    const [serverResponse, setServerResponse] = useState('');

    async function getAvailableTables(e){
        e.preventDefault();
        const tableResponse = await checkAvailableTables(bookedDateTime, noOfCustomers);
        setAvailableTables(tableResponse.data);
        setServerResponse(tableResponse.status);
    }

    async function handleSubmit(tableId){
        const response = await createReservation(noOfCustomers, bookedDateTime, name, phoneNo, tableId);
        setServerResponse(response);   
    }
    
    if (serverResponse == 204) { return <ConfirmedReservation /> } 

    if (serverResponse == 200 && availableTables !== null) { return <ChooseTable availableTables={availableTables} sendToParent={handleSubmit}/> }

    return (
        <>
            <h1 className="main-font">Reserve table</h1>

            <div className="page-content-form">
                <Form onSubmit={getAvailableTables}>
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

                    <Button variant="primary" type="submit" className="btn-margin">Choose table</Button>
                </Form>
            </div>
        </>
    )
}