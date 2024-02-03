const nodemailer = require("nodemailer");
require("dotenv/config");

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "viktoria.zalozna@meta.ua",
    pass: META_PASSWORD,
  },
  //   tls: {
  //     rejectUnauthorized: false,
  //   },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "viktoria.zalozna@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
