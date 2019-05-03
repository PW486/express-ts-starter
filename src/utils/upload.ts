import multer from 'multer';
import { extname } from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
  }
})

const upload = multer({ storage: storage });

export default upload;
