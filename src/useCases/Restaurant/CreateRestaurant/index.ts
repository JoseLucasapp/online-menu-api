import { RestaurantImplementation } from "../../../database/implementations/Restaurant.implementation";
import { CreateRestaurantController } from "./CreateRestaurant.controller";
import { CreateRestaurantUseCase } from "./CreateRestaurant.usecase";

const repository = new RestaurantImplementation()
const createRestaurantUseCase = new CreateRestaurantUseCase(repository)
const createRestaurantController = new CreateRestaurantController(createRestaurantUseCase)

export { createRestaurantController, createRestaurantUseCase }