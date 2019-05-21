import { FILE_IMAGE_SIZE } from 'config/environments';
import { existsSync, mkdirSync } from 'fs';
import multer from 'multer';
import { extname } from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destination = 'uploads/';
    if (!existsSync(destination)) {
      mkdirSync(destination);
    }
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname).toLowerCase());
  },
});

function multerError(message: string): Error {
  const err = new Error(message);
  err.name = 'MulterError';

  return err;
}

export const imageUpload = multer({
  storage,
  limits: {
    fileSize: FILE_IMAGE_SIZE,
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpg|jpeg|png|gif/;
    const checkMime = filetypes.test(file.mimetype);
    const checkExt = filetypes.test(extname(file.originalname).toLowerCase());

    if (checkMime && checkExt) {
      cb(null, true);
    } else {
      cb(multerError('Only following filetypes can be uploaded - ' + filetypes), false);
    }
  },
});
