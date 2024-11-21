import fs from 'fs';
import path from 'path';

const filePath = path.resolve('emails.json');

// Helper function to read emails from the file
const readEmails = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

// Helper function to write emails to the file
const writeEmails = (emails) => {
    fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const emails = readEmails();
        res.status(200).json(emails);
    } else if (req.method === 'POST') {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const emails = readEmails();
        const newEmail = { id: emails.length + 1, email, date: new Date().toISOString() };
        emails.push(newEmail);
        writeEmails(emails);

        res.status(201).json(newEmail);
    } else if (req.method === 'DELETE') {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ error: 'Email ID is required' });
        }

        let emails = readEmails();
        emails = emails.filter((email) => email.id !== parseInt(id, 10));
        writeEmails(emails);

        res.status(200).json({ message: 'Email deleted successfully' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
