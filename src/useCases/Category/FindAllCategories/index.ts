import { CategoryImplementation } from "../../../database/implementations/Category.implementation";
import { FindAllCategoriesController } from "./FindAllCategories.controller";
import { FindAllCategoriesUseCase } from "./FindAllCategories.usecase";

const repository = new CategoryImplementation()
const findAllCategoriesUseCase = new FindAllCategoriesUseCase(repository)
const findAllCategoriesController = new FindAllCategoriesController(findAllCategoriesUseCase)
export { findAllCategoriesController, findAllCategoriesUseCase }