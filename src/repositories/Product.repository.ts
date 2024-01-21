import ProductEntity from "../entities/Product.entity"

export interface IProductRepository {
    createProduct(data: ProductEntity): Promise<void>
    updateProduct(id: number, data: ProductEntity): Promise<void>
    deleteProduct(id: number): Promise<void>
    findProduct(id: number): Promise<ProductEntity | null>
    findAllProducts(): Promise<ProductEntity[]>
}