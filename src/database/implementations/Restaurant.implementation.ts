
import RestaurantEntity from "../../entities/Restaurant.entity";
import { IRestaurantRepository } from "../../repositories/Restaurant.repository";

export class RestaurantImplementation implements IRestaurantRepository {
    async createRestaurant(data: RestaurantEntity): Promise<void> {
        await RestaurantEntity.create({ ...data.dataValues })
    }
    async deleteRestaurant(id: number): Promise<void> {
        await RestaurantEntity.destroy({ where: { id } })
    }
    async updateRestaurant(id: number, data: RestaurantEntity): Promise<void> {
        await RestaurantEntity.update(data.dataValues, { where: { id } })
    }
    async findRestaurant(id: number): Promise<RestaurantEntity | null> {
        return await RestaurantEntity.findByPk(id)
    }
    async findAllRestaurants(): Promise<RestaurantEntity[]> {
        return await RestaurantEntity.findAll()
    }

}