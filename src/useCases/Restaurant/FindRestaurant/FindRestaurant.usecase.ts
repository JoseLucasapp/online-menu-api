import { IRestaurantRepository } from "../../../repositories/Restaurant.repository";

export class FindRestaurantUseCase {
    constructor(private restaurantRepository: IRestaurantRepository) { }

    async execute(id: number) {
        return await this.restaurantRepository.findRestaurant(id)
    }
}