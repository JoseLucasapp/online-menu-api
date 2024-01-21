import { AddressEntity } from "../../../entities/Address.entity";
import { IAddressRepository } from "../../../repositories/Address.repository";
import { ICreateAddressDTO } from "../CreateAddress/CreateAddress.dto";
import { IUpdateAddressDTO } from "./UpdateAddress.dto";

export class UpdateAddressUseCase {
    constructor(private addressRepository: IAddressRepository) { }

    async execute(id: number, data: ICreateAddressDTO) {
        const address = new AddressEntity(data)
        await this.addressRepository.updateAddress(id, address)
    }
}