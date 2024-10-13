import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ChooseTable({availableTables, sendToParent}) {
    return (
        <>
            <h1 className="main-font">Reserve table</h1>
            <h2>Choose table</h2>
            
            {availableTables.map(table => {
                return (
                    <div key={table.tableId}>
                        <Card style={{ width: '18rem' }} className='table-card'>
                            <Card.Body>
                                <Card.Text className='card-p'>Table number: {table.tableId}</Card.Text>
                                <Card.Text className='card-p'>Seating capacity: {table.seatingCapacity}</Card.Text>
                                <Button variant="primary" onClick={() => sendToParent(table.tableId)}>Choose</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
            
        </>
    )
}