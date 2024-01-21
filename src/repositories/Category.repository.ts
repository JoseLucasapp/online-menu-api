import CategoryEntity from "../entities/Category.entity"

export interface ICategoryRepository {
    createCategory(data: CategoryEntity): Promise<void>
    findAllCategories(): Promise<CategoryEntity[]>
    findCategory(id: number): Promise<CategoryEntity | null>
    updateCategory(id: number, data: CategoryEntity): Promise<void>
    deleteCategory(id: number): Promise<void>
}