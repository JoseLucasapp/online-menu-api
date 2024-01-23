import { ICategoryRepository } from "../../../repositories/Category.repository";

export class FindAllCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }

    async execute() {
        return this.categoryRepository.findAllCategories()
    }
}