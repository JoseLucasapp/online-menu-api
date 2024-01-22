import { IRestaurantRepository } from "../../../repositories/Restaurant.repository";

export class FindAllRestaurantsUseCase {
    constructor(private restaurantRepository: IRestaurantRepository) { }

    async execute(query: any) {
        return await this.restaurantRepository.findAllRestaurants()
    }
}