import { NextApiRequest, NextApiResponse } from 'next';

let users: { username: string; password: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const userExists = users.some(user => user.username === username);

    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
    } else {
      users.push({ username, password });
      res.status(201).json({ message: 'User created successfully' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
