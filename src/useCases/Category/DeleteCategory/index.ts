import { CategoryImplementation } from "../../../database/implementations/Category.implementation";
import { DeleteCategoryController } from "./DeleteCategory.controller";
import { DeleteCategoryUseCase } from "./DeleteCategory.usecase";

const repository = new CategoryImplementation()
const deleteCategoryUseCase = new DeleteCategoryUseCase(repository)
const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)

export { deleteCategoryController, deleteCategoryUseCase }