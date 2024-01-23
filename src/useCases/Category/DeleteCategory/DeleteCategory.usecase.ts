import { ICategoryRepository } from "../../../repositories/Category.repository";

export class DeleteCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(id: number) {
        await this.categoryRepository.deleteCategory(id)
    }
}