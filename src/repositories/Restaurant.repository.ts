import RestaurantEntity from "../entities/Restaurant.entity"

export interface IRestaurantRepository {
    createRestaurant(data: RestaurantEntity): Promise<void>
    deleteRestaurant(id: number): Promise<void>
    updateRestaurant(id: number, data: RestaurantEntity): Promise<void>
    findRestaurant(id: number): Promise<RestaurantEntity | null>
    findAllRestaurants(): Promise<RestaurantEntity[]>
}