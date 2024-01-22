import { RestaurantImplementation } from "../../../database/implementations/Restaurant.implementation";
import { FindAllRestaurantsController } from "./FindAllRestaurants.controller";
import { FindAllRestaurantsUseCase } from "./FindAllRestaurants.usecase";

const repository = new RestaurantImplementation()
const findAllRestaurantsUseCase = new FindAllRestaurantsUseCase(repository)
const findAllRestaurantsController = new FindAllRestaurantsController(findAllRestaurantsUseCase)

export { findAllRestaurantsController, findAllRestaurantsUseCase }