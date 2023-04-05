
import bcrypt from 'bcrypt';
import User from '../../models/user';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN, { expiresIn: '30m' });
    const refreshToken = jwt.sign({ email: user.email }, process.env.REFRESH_TOKEN, { expiresIn: '7d' });


    return res.status(200).json({ accessToken, refreshToken, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

