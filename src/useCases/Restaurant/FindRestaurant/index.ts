import { RestaurantImplementation } from "../../../database/implementations/Restaurant.implementation";
import { FindRestaurantController } from "./FindRestaurant.controller";
import { FindRestaurantUseCase } from "./FindRestaurant.usecase";

const repository = new RestaurantImplementation()

const findRestaurantUseCase = new FindRestaurantUseCase(repository)
const findRestaurantController = new FindRestaurantController(findRestaurantUseCase)

export { findRestaurantController, findRestaurantUseCase }