const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = Joi.object().keys({
      firstname: Joi.string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),
      lastname: Joi.string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/),
      phone: Joi.string().regex(/^[0-9]{9,9}$/),
      isHouseProvider: Joi.boolean()
    });

    Joi.validate(req.body, schema, (error, value) => {
      if (error) {
        switch (error.details[0].context.key) {
          case "firstname":
            res
              .status(400)
              .json({ message: "Please provide a valid first name" });
            break;
          case "lastname":
            res
              .status(400)
              .json({ message: "Please provide a valid last name" });
            break;
          case "email":
            res.status(400).json({ message: "Please provide a valid email" });
            break;
          case "password":
            res.status(400).json({ message: "Password must be 8 char long" });
            break;
          case "phone":
            res
              .status(400)
              .json({ message: "Phone number must be 9 digit long" });
            break;
          case "isHouseProvider":
            res.status(400).json("Is HouseProvider");
          default:
            res
              .status(400)
              .json({ message: "Invalid Registration Information" });
        }
      } else {
        next();
      }
    });
  },

  login(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required(),
      phone: Joi.string().regex(/^[0-9]{9,9}$/),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
    });

    Joi.validate(req.body, schema, (error, value) => {
      if (error) {
        switch (error.details[0].context.key) {
          case "email":
            res.status(400).json({ message: "Please provide a valid email" });
            break;
          case "phone":
            res
              .status(400)
              .json({ message: "Phone number must be 9 digit long" });
            break;
          case "password":
            res.status(400).json({ message: "Password must be 8 char long" });
            break;
          default:
            res.status(400).json({ message: "Invalid Credentails" });
        }
      } else {
        next();
      }
    });
  }
};
