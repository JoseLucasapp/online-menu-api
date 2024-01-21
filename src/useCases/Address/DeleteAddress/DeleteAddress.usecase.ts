import { IAddressRepository } from "../../../repositories/Address.repository";

export class DeleteAddressUseCase {
    constructor(private addressRepository: IAddressRepository) { }

    async execute(id: number) {
        await this.addressRepository.deleteAddress(id)
    }
}