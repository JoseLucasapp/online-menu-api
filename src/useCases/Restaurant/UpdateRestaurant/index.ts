import { RestaurantImplementation } from "../../../database/implementations/Restaurant.implementation";
import { UpdateRestaurantController } from "./UpdateRestaurant.controller";
import { UpdateRestaurantUseCase } from "./UpdateRestaurant.usecase";

const repository = new RestaurantImplementation()
const updateRestaurantUseCase = new UpdateRestaurantUseCase(repository)
const updateRestaurantController = new UpdateRestaurantController(updateRestaurantUseCase)

export { updateRestaurantUseCase, updateRestaurantController }