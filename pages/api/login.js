
import bcrypt from 'bcrypt';
import User from '../../models/user';
import jwt from 'jsonwebtoken';
import connectDB from '@/middleware/mongoose';

export default async function handler(req, res) {
  await connectDB();
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN, { expiresIn: '30m' });
        res.status(200).json({ accessToken, user, message: 'Login successful' });
      }
    }

    res.status(401).json({ message: 'Invalid email or password' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

