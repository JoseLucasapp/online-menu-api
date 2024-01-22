import { RestaurantImplementation } from "../../../database/implementations/Restaurant.implementation";
import { DeleteRestaurantController } from "./DeleteRestaurant.controller";
import { DeleteRestaurantUseCase } from "./DeleteRestaurant.usecase";

const repository = new RestaurantImplementation()
const deleteRestaurantUseCase = new DeleteRestaurantUseCase(repository)
const deleteRestaurantController = new DeleteRestaurantController(deleteRestaurantUseCase)

export { deleteRestaurantController, deleteRestaurantUseCase }