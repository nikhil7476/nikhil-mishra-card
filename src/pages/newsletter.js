import { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

const Newsletter = () => {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    const storedEmails = localStorage.getItem('emails');
    if (storedEmails) {
      setEmailList(JSON.parse(storedEmails)); // Load emails from local storage
    }
  }, []);

  return (
    <Container className="mt-5">
      <h2>Submitted Emails</h2>
      {emailList.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {emailList.map((email, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{email}</td>
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
