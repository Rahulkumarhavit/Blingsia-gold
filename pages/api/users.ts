
import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, mobile, email } = req.body;

    if (!name || !mobile || !email) {
      throw new Error('Name, mobile, and email are required');
    }

    await sql`
      INSERT INTO watchlistmember (name, mobile, email)
      VALUES (${name}, ${mobile}, ${email})
    `;

    // If insertion is successful, return success message
    return res.status(200).json({ message: 'Data inserted successfully' });
  } catch (error) {
    // If an error occurs during insertion, return error message
    return res.status(500).json({ error: 'data not inserted' });
  }
}