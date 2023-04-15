import connectDB from "@/middleware/mongoose";
import upload from "@/middleware/multer";
import Project from '../../models/project'

export const config = {
  api: {
    bodyParser: false,
  },
};


export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    upload.single('thumbnail')(req, res, async (error) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      } else {
        try {
          const { name, description } = req.body;
          const project = Project({ name, description });
          if (req.file) {
            project.thumbnail = `/images/${req.file.filename}`;
          }
          await project.save();
          res.status(201).json(project);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}