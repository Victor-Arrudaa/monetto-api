import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
    if (!id) throw new Error("User id is required");
    return await transactionRepository.create({ ...body, userId: id });
}

async function findAllByUser(id) {
    if (!id) throw new Error("User id is required");
    return await transactionRepository.findAllByUser(id);
}

async function update(body, id) {
    if (!id) throw new Error("User ID is required");

    return await transactionRepository.update({ ...body, id });
}

async function remove(id) {
    if (!id) throw new Error("User ID is required");

    return await transactionRepository.remove(id);
}

export default { create, findAllByUser, update, remove };
