import Button from 'react-bootstrap/Button';

export function ConfirmedReservation() {
    return (
        <>
            <h1 className="main-font">Your reservation is confirmed</h1>
            <p className="centre-margin-top">We are looking forward to seeing you!</p>
            <Button variant="primary" className="btn-margin btn-center" type="button"><a className="btn-link-color" href="https://localhost:7164/">Return to start page</a></Button>
        </>
    )
}