import User from '../../models/user';
import bcrypt from 'bcrypt';

// mongoose.connect(`${process.env.MONGODB_URL}`)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.error(error));


export default async function register(req, res) {

  try {
    const { name, email, password } = req.body;
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email }, { timeout: 30000 });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user with the provided data
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Send a success response
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}