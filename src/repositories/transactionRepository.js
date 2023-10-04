import TransactionSchema from "../schemas/Transaction.js";

async function create(data) {
    return TransactionSchema.create(data);
}

async function findAllByUser(id) {
    return await TransactionSchema.find({ userId: id });
}

async function update(data) {
    return await TransactionSchema.findOneAndUpdate({ _id: data.id }, data, {
        new: true,
    });
}

async function remove(id) {
    return await TransactionSchema.deleteOne({ _id: id });
}

export default { create, findAllByUser, update, remove };
