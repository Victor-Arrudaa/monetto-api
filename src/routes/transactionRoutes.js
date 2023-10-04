import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.get("/transactions", transactionController.findAllByUser);
transactionRouter.post(
    "/transactions",
    validationSchemaMiddleware(CreateTransaction),
    transactionController.create
);
transactionRouter.patch("/transactions/:id", transactionController.update);
transactionRouter.delete("/transactions/:id", transactionController.remove);

export default transactionRouter;
