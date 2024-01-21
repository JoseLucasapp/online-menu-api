import { AddressImplementation } from "../../../database/implementations/Address.implementation";
import { CreateAddressController } from "./CreateAddress.controller";
import { CreateAddressUseCase } from "./CreateAddress.usecase";

const repository = new AddressImplementation()

const createAddressUseCase = new CreateAddressUseCase(repository)
const createAddressController = new CreateAddressController(createAddressUseCase)

export { createAddressController, createAddressUseCase }