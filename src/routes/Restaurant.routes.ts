import { Request, Response, Router } from "express";
import { createRestaurantController } from "../useCases/Restaurant/CreateRestaurant";
import { findAllRestaurantsController } from "../useCases/Restaurant/FindAllRestaurants";
import { findRestaurantController } from "../useCases/Restaurant/FindRestaurant";
import { updateRestaurantController } from "../useCases/Restaurant/UpdateRestaurant";
import { deleteRestaurantController } from "../useCases/Restaurant/DeleteRestaurant";

const restaurantRoutes = Router()
const prefix = '/restaurant'

restaurantRoutes.post(prefix, (request: Request, response: Response) => {
    return createRestaurantController.handle(request, response)
})
restaurantRoutes.get(prefix, (request: Request, response: Response) => {
    return findAllRestaurantsController.handle(request, response)
})
restaurantRoutes.get(prefix, (request: Request, response: Response) => {
    return findRestaurantController.handle(request, response)
})
restaurantRoutes.put(prefix, (request: Request, response: Response) => {
    return updateRestaurantController.handle(request, response)
})
restaurantRoutes.delete(prefix, (request: Request, response: Response) => {
    return deleteRestaurantController.handle(request, response)
})

export { restaurantRoutes }