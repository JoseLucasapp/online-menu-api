import CategoryEntity from "../../../entities/Category.entity";
import { ICategoryRepository } from "../../../repositories/Category.repository";
import { IUpdateCategoryDTO } from "./UpdateCategory.dto";

export class UpdateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(id: number, data: IUpdateCategoryDTO) {
        const category = new CategoryEntity(data)
        await this.categoryRepository.updateCategory(id, category)
    }
}