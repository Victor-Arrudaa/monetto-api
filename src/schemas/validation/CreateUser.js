import Joi from "joi";

const pattern =
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

export const CreateUser = Joi.object({
    name: Joi.string().required().min(4).max(55),
    email: Joi.string().email().required().min(3),
    password: Joi.string()
        .pattern(new RegExp(pattern))
        .required()
        .min(8)
        .max(30),
    createdAt: Joi.string(),
});
