import { AddressImplementation } from "../../../database/implementations/Address.implementation";
import { UpdateAddressController } from "./UpdateAddress.controller";
import { UpdateAddressUseCase } from "./UpdateAddress.usecase";

const repository = new AddressImplementation()
const updateAddressUseCase = new UpdateAddressUseCase(repository)
const updateAddressController = new UpdateAddressController(updateAddressUseCase)

export { updateAddressController, updateAddressUseCase }