import multer from 'multer';

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './public/assets/images');
  },
  filename(req, file, callback) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = file.originalname.split('.').pop();
    callback(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
  },
});

const upload = multer({ storage });

export default upload;
