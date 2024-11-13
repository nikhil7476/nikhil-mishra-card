import { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';

const Newsletter = () => {
    const [emailList, setEmailList] = useState([]);

    useEffect(() => {
        const storedEmails = localStorage.getItem('emails');
        if (storedEmails) {
            setEmailList(JSON.parse(storedEmails)); // Load emails from local storage
        }
    }, []);

    const handleDelete = (index) => {
        // Create a new list of emails excluding the one at the specified index
        const updatedEmails = emailList.filter((_, i) => i !== index);

        // Update the local storage and the state
        localStorage.setItem('emails', JSON.stringify(updatedEmails));
        setEmailList(updatedEmails); // Update the state to reflect changes
    };

    return (
        <Container className="mt-5">
            <h2>Submitted Emails</h2>
            {emailList.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email Address</th>
                            <th>Date of Subscription</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emailList.map((entry, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{entry.email}</td>
                                <td>{new Date(entry.date).toLocaleString()}</td> {/* Format the date */}
                                <td>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDelete(index)} // Call delete function
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No emails submitted yet.</p>
            )}
        </Container>
    );
};

export default Newsletter;
