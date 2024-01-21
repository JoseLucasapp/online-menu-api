import { AddressEntity } from "../../../entities/Address.entity";
import { IAddressRepository } from "../../../repositories/Address.repository";
import { ICreateAddressDTO } from "./CreateAddress.dto";

export class CreateAddressUseCase {
    constructor(private addressRepository: IAddressRepository) { }

    async execute(data: ICreateAddressDTO) {
        const address = new AddressEntity(data)
        await this.addressRepository.createAddress(address)
    }
}