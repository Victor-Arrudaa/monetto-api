import Joi from "joi";

const pattern =
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

export const AuthUser = Joi.object({
    email: Joi.string().email().required().min(3),
    password: Joi.string()
        .pattern(new RegExp(pattern))
        .required()
        .min(8)
        .max(30),
});
