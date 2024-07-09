import { NextApiRequest, NextApiResponse } from 'next';

const avaliadores = [
  { id: 1, name: 'Avaliador 1' },
  { id: 2, name: 'Avaliador 2' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(avaliadores);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
