import ProductEntity from "../../entities/Product.entity";
import { IProductRepository } from "../../repositories/Product.repository";

export class ProductImplementation implements IProductRepository {
    async createProduct(data: ProductEntity): Promise<void> {
        await ProductEntity.create({ ...data.dataValues })
    }
    async updateProduct(id: number, data: ProductEntity): Promise<void> {
        await ProductEntity.update(data.dataValues, { where: { id } })
    }
    async deleteProduct(id: number): Promise<void> {
        await ProductEntity.destroy({ where: { id } })
    }
    async findProduct(id: number): Promise<ProductEntity | null> {
        return await ProductEntity.findByPk(id)
    }
    async findAllProducts(): Promise<ProductEntity[]> {
        return await ProductEntity.findAll()
    }

}