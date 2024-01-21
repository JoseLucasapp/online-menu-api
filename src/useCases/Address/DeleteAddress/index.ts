import { AddressImplementation } from "../../../database/implementations/Address.implementation";
import { DeleteAddressController } from "./DeleteAddress.controller";
import { DeleteAddressUseCase } from "./DeleteAddress.usecase";

const repository = new AddressImplementation()
const deleteAddressUseCase = new DeleteAddressUseCase(repository)
const deleteAddressController = new DeleteAddressController(deleteAddressUseCase)

export { deleteAddressController, deleteAddressUseCase }