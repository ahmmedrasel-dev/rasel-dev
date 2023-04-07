import verifyJWT from '@/middleware/verifyJWT';
import User from '../../models/user';

export default async function handler(req, res) {
  verifyJWT(req, res, async () => {
    try {
      const user = await User.findOne({ email: req.decode.email });
      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  })
}

