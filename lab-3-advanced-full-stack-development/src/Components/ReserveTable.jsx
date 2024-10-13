import CreateReservation from "./CreateReservation";
import Footer from "./Footer";
import Header from "./Header";

export default function ReserveTable() {
    return (
        <div  className="container">
            <Header />
            <main className="grid-main">
                <CreateReservation />
            </main>
            <Footer />
        </div> 
    )
}