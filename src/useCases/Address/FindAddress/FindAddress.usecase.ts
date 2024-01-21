import { IAddressRepository } from "../../../repositories/Address.repository";

export class FindAddressUseCase {
    constructor(private addressRepository: IAddressRepository) { }

    async execute(id: number) {
        return this.addressRepository.findAddress(id)
    }
}