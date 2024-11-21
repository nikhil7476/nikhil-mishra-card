export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        const emailIndex = emails.findIndex((email) => email.id === parseInt(id, 10));
        if (emailIndex === -1) {
            return res.status(404).json({ error: 'Email not found' });
        }
        emails.splice(emailIndex, 1); // Remove email by index
        res.status(200).json({ message: 'Email deleted successfully' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
