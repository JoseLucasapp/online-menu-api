import { AddressEntity } from "../entities/Address.entity";

export interface IAddressRepository {
    findAddress(id: number): Promise<AddressEntity | null>
    createAddress(data: AddressEntity): Promise<void>
    deleteAddress(id: number): Promise<void>
    updateAddress(id: number, data: AddressEntity): Promise<void>
}