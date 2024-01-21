import CategoryEntity from "../../entities/Category.entity";
import { ICategoryRepository } from "../../repositories/Category.repository";

export class CategoryImplementation implements ICategoryRepository {
    async createCategory(data: CategoryEntity): Promise<void> {
        await CategoryEntity.create({ ...data.dataValues })
    }
    async findAllCategories(): Promise<CategoryEntity[]> {
        return await CategoryEntity.findAll()
    }
    async findCategory(id: number): Promise<CategoryEntity | null> {
        return await CategoryEntity.findByPk(id)
    }
    async updateCategory(id: number, data: CategoryEntity): Promise<void> {
        await CategoryEntity.update(data.dataValues, { where: { id } })
    }
    async deleteCategory(id: number): Promise<void> {
        await CategoryEntity.destroy({ where: { id } })
    }

}