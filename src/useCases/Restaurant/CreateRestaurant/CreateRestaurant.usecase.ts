import RestaurantEntity from "../../../entities/Restaurant.entity";
import { IRestaurantRepository } from "../../../repositories/Restaurant.repository";
import { ICreateRestaurantDTO } from "./CreateRestaurant.dto";

export class CreateRestaurantUseCase {
    constructor(private restaurantRepository: IRestaurantRepository) { }

    async execute(data: ICreateRestaurantDTO) {
        const restaurant = new RestaurantEntity(data)
        await this.restaurantRepository.createRestaurant(restaurant)
    }
}