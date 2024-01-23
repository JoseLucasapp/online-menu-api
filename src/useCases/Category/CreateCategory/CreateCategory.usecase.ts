import CategoryEntity from "../../../entities/Category.entity";
import { ICategoryRepository } from "../../../repositories/Category.repository";
import { ICreateCategoryDTO } from "./CreateCategory.dto";

export class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(data: ICreateCategoryDTO) {
        const category = new CategoryEntity(data)
        await this.categoryRepository.createCategory(category)
    }
}