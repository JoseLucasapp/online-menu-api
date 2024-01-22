import RestaurantEntity from "../../../entities/Restaurant.entity";
import { IRestaurantRepository } from "../../../repositories/Restaurant.repository";
import { IUpdateRestaurantDTO } from "./UpdateRestaurant.dto";

export class UpdateRestaurantUseCase {
    constructor(private restaurantRepository: IRestaurantRepository) { }

    async execute(id: number, data: IUpdateRestaurantDTO) {
        const restaurant = new RestaurantEntity(data)
        await this.restaurantRepository.updateRestaurant(id, restaurant)
    }
}