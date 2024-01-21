import { AddressEntity } from "../../entities/Address.entity";
import { IAddressRepository } from "../../repositories/Address.repository";

export class AddressImplementation implements IAddressRepository {
    async findAddress(id: number): Promise<AddressEntity | null> {
        return await AddressEntity.findByPk(id)
    }
    async createAddress(data: AddressEntity): Promise<void> {
        await AddressEntity.create({ ...data.dataValues })
    }
    async deleteAddress(id: number): Promise<void> {
        await AddressEntity.destroy({ where: { id } })
    }
    async updateAddress(id: number, data: AddressEntity): Promise<void> {
        await AddressEntity.update(data.dataValues, { where: { id } })
    }

}