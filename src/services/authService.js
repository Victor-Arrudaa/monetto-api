import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

async function signup(body) {
    const hashPassword = bcrypt.hashSync(body.password, 10);

    const userExists = await authRepository.findByEmail(body.email);
    if (userExists) throw new Error("user already exists");

    return authRepository.create({ ...body, password: hashPassword });
}

async function signin(body) {
    const userExists = await authRepository.findByEmail(body.email);
    if (!userExists) throw new Error("Email or password incorrect!");

    const passwordOk = bcrypt.compareSync(body.password, userExists.password);
    if (!passwordOk) throw new Error("Email or password incorrect!");

    return authRepository.generateToken(userExists._id);
}

async function userLogged(id) {
    const user = await authRepository.findById(id);
    if (!user) throw new Error("User not found!");
    return user;
}

export default { signup, signin, userLogged };
