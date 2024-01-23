import { CategoryImplementation } from "../../../database/implementations/Category.implementation";
import { UpdateCategoryController } from "./UpdateCategory.controller";
import { UpdateCategoryUseCase } from "./UpdateCategory.usecase";

const repository = new CategoryImplementation()
const updateCategoryUseCase = new UpdateCategoryUseCase(repository)
const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)

export { updateCategoryController, updateCategoryUseCase }