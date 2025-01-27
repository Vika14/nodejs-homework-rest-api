const Joi = require("joi");

// const emailRegexp = /^\w+([[\].-]?\w+)*@\w+([[\].-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
  subscription: Joi.string(),
});

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});

const schemas = {
  registerSchema,
  emailSchema,
  loginSchema,
};

module.exports = {
  schemas,
};
