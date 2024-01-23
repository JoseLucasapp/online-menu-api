import { CategoryImplementation } from "../../../database/implementations/Category.implementation";
import { FindCategoryController } from "./FindCategory.controller";
import { FindCategoryUseCase } from "./FindCategory.usecase";

const repository = new CategoryImplementation()
const findCategoryUseCase = new FindCategoryUseCase(repository)
const findCategoryController = new FindCategoryController(findCategoryUseCase)

export { findCategoryController, findCategoryUseCase }