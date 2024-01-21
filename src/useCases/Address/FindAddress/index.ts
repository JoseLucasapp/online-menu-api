import { AddressImplementation } from "../../../database/implementations/Address.implementation";
import { FindAddressController } from "./FindAddress.controller";
import { FindAddressUseCase } from "./FindAddress.usecase";

const repository = new AddressImplementation()

const findAddressUseCase = new FindAddressUseCase(repository)
const findAddressController = new FindAddressController(findAddressUseCase)

export { findAddressController, findAddressUseCase }