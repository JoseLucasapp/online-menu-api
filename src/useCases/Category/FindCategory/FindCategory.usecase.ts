import { ICategoryRepository } from "../../../repositories/Category.repository";

export class FindCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(id: number) {
        return this.categoryRepository.findCategory(id)
    }
}