const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/user");
const { HttpError } = require("../../helpers");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const filename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarDir, filename);
    await fs.rename(tempUpload, resultUpload);

    Jimp.read(resultUpload, (err, avatarFile) => {
      if (err) {
        throw HttpError(404, `File ${filename} not found`);
      }
      avatarFile.resize(250, 250).write(resultUpload);
    });

    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({
      avatarURL,
    });
  } catch (error) {
    throw HttpError(404, `Avatar file not found`);
  }
};

module.exports = updateAvatar;
