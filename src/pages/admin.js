// import { useEffect, useState } from 'react';
// import { Table, Button, Container } from 'react-bootstrap';
// import styles from "@/styles/Admin.module.css";

// const Admin = () => {
//     const [emailList, setEmailList] = useState([]);

//     useEffect(() => {
//         const storedEmails = localStorage.getItem('emails');
//         if (storedEmails) {
//             setEmailList(JSON.parse(storedEmails)); // Load emails from local storage
//         }
//     }, []);

//     const handleDelete = (index) => {
//         // Create a new list of emails excluding the one at the specified index
//         const updatedEmails = emailList.filter((_, i) => i !== index);

//         // Update the local storage and the state
//         localStorage.setItem('emails', JSON.stringify(updatedEmails));
//         setEmailList(updatedEmails); // Update the state to reflect changes
//     };

//     return (
//         <>
//             <section className={styles.adminMain}>
//                 <Container className="mt-5">
//                     <h2>Submitted Emails</h2>
//                     {emailList.length > 0 ? (
//                         <Table striped bordered hover>
//                             <thead>
//                                 <tr>
//                                     <th>#</th>
//                                     <th>Email Address</th>
//                                     <th>Date of Subscription</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {emailList.map((entry, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td>{entry.email}</td>
//                                         <td>{new Date(entry.date).toLocaleString()}</td> {/* Format the date */}
//                                         <td>
//                                             <Button
//                                                 variant="danger"
//                                                 onClick={() => handleDelete(index)} // Call delete function
//                                             >
//                                                 Delete
//                                             </Button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </Table>
//                     ) : (
//                         <p>No emails submitted yet.</p>
//                     )}
//                 </Container>
//             </section>
//         </>
//     );
// };

// export default Admin;

import { useState, useEffect } from 'react';
import { Table, Button, Container, Modal, Form } from 'react-bootstrap';
import styles from "@/styles/Admin.module.css";
import Link from 'next/link';

const Admin = () => {
    const [emailList, setEmailList] = useState([]);
    const [showModal, setShowModal] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setShowModal(isLoggedIn ? false : true);
    }, []);

    const handleLogin = () => {
        if (username === 'nikhil@gmail.com' && password === 'Shivoham@24') {
            setShowModal(false);
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            setError('Invalid credentials');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setShowModal(true);
    };

    useEffect(() => {
        const storedEmails = localStorage.getItem('emails');
        if (storedEmails) {
            setEmailList(JSON.parse(storedEmails));
        }
    }, []);

    const handleDelete = (index) => {
        const updatedEmails = emailList.filter((_, i) => i !== index);
        localStorage.setItem('emails', JSON.stringify(updatedEmails));
        setEmailList(updatedEmails);
    };

    return (
        <>
            {/* Styled Login Modal */}
            {showModal !== null && (
                <Modal
                    show={showModal}
                    onHide={() => { }}
                    centered
                    className={styles.loginModal}
                >
                    <Modal.Header closeButton className={styles.modalHeader}>
                        <Modal.Title>Login to Admin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={styles.modalBody}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={styles.inputField}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={styles.inputField}
                                />
                            </Form.Group>

                            {error && <p className={styles.errorText}>{error}</p>}

                            <Button
                                variant="primary"
                                onClick={handleLogin}
                                className={styles.loginButton}
                            >
                                Login
                            </Button>
                        </Form>
                        <Link href="/home" title="Back to Home" className={styles.back}>Back to Home Page</Link>
                    </Modal.Body>
                </Modal>
            )}

            {/* Admin Section (only accessible after login) */}
            {showModal === false && (
                <section className={styles.adminMain}>
                    <Container>
                        <div className={styles.adminHead}>
                            <h1>Admin Dashboard</h1>
                            <Button variant="secondary" onClick={handleLogout} className={styles.buttonLogout}>
                                Logout
                            </Button>
                        </div>
                        <h2 className={styles.title}>Submitted Emails</h2>
                        {emailList.length > 0 ? (
                            <div className={styles.tableContainer}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr className={styles.tableHeading}>
                                            <th>#</th>
                                            <th>Email Address</th>
                                            <th>Date of Subscription</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {emailList.map((entry, index) => (
                                            <tr key={index}>
                                                <td className={styles.tableData}>{index + 1}</td>
                                                <td className={styles.tableData}>{entry.email}</td>
                                                <td className={styles.tableData}>{new Date(entry.date).toLocaleString()}</td>
                                                <td className={styles.tableActions}>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => handleDelete(index)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        ) : (
                            <p>No emails submitted yet.</p>
                        )}
                    </Container>
                </section>
            )}
        </>
    );
};

export default Admin;
