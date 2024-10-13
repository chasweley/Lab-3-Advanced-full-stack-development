import axios from "axios";

const API_URI = 'https://localhost:7081/api/Booking/Create';

export async function createReservation(noOfCustomers, reservedDateTime, name, phoneNo) {
    try{
        const booking = { noOfCustomers: parseInt(noOfCustomers), 
            bookedDateTime: new Date(reservedDateTime), 
            phoneNo, 
            name, 
            tableId: null }
        const response = await axios.post(`${API_URI}`, booking);
        return response.status;
    } catch(error){
        console.log("Error making reservation: ", error);
    }
}