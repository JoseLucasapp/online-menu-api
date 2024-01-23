import { CategoryImplementation } from "../../../database/implementations/Category.implementation";
import { CreateCategoryController } from "./CreateCategory.controller";
import { CreateCategoryUseCase } from "./CreateCategory.usecase";

const repository = new CategoryImplementation()

const createCategoryUseCase = new CreateCategoryUseCase(repository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController, createCategoryUseCase }