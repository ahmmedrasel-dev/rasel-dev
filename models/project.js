import mongoose from 'mongoose';
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true
  },
  description: {
    type: String,
  }

}, {
  timestamps: true
})

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);