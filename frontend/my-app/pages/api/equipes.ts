import { NextApiRequest, NextApiResponse } from 'next';

const equipes = [
  { id: 1, name: 'Equipe 1' },
  { id: 2, name: 'Equipe 2' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(equipes);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
