import axios from "axios";

const API_URI = 'https://localhost:7081/api';

export async function checkAvailableTables(reservedDateTime, noOfCustomers) {
    try{
        const listOfAvailableTables = await axios.get(`${API_URI}/Table/Availability/${reservedDateTime}/${noOfCustomers}`);
        return listOfAvailableTables;
    } catch(error){
        console.log("Error fetching tables: ", error);
    }
}

export async function createReservation(noOfCustomers, reservedDateTime, name, phoneNo, tableId) {
    try{
        const booking = { noOfCustomers: parseInt(noOfCustomers), 
            bookedDateTime: new Date(reservedDateTime), 
            phoneNo, 
            name, 
            tableId: parseInt(tableId) }
        const response = await axios.post(`${API_URI}/Booking/Create`, booking);
        return response.status;
    } catch(error){
        console.log("Error making reservation: ", error);
    }
}