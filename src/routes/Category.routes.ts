import { Request, Response, Router } from "express";
import { createCategoryController } from "../useCases/Category/CreateCategory";
import { findAllCategoriesController } from "../useCases/Category/FindAllCategories";
import { findCategoryController } from "../useCases/Category/FindCategory";
import { updateCategoryController } from "../useCases/Category/UpdateCategory";
import { deleteCategoryController } from "../useCases/Category/DeleteCategory";

const categoryRoutes = Router()
const prefix = '/category'

categoryRoutes.post(prefix, (request: Request, response: Response) => {
    return createCategoryController.handle(request, response)
})
categoryRoutes.get(prefix, (request: Request, response: Response) => {
    return findAllCategoriesController.handle(request, response)
})
categoryRoutes.get(prefix, (request: Request, response: Response) => {
    return findCategoryController.handle(request, response)
})
categoryRoutes.put(prefix, (request: Request, response: Response) => {
    return updateCategoryController.handle(request, response)
})
categoryRoutes.delete(prefix, (request: Request, response: Response) => {
    return deleteCategoryController.handle(request, response)
})

export { categoryRoutes }