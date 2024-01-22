import { IRestaurantRepository } from "../../../repositories/Restaurant.repository";

export class DeleteRestaurantUseCase {
    constructor(private restaurantRepository: IRestaurantRepository) { }

    async execute(id: number) {
        await this.restaurantRepository.deleteRestaurant(id)
    }
}