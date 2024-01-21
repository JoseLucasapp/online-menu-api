import { Request, Response, Router } from "express";
import { createAddressController } from "../useCases/Address/CreateAddress";
import { findAddressController } from "../useCases/Address/FindAddress";
import { deleteAddressController } from "../useCases/Address/DeleteAddress";
import { updateAddressController } from "../useCases/Address/UpdateAddress";

const addressRoutes = Router()

const prefix = '/address'

addressRoutes.post(prefix, (request: Request, response: Response) => {
    return createAddressController.handle(request, response)
})

addressRoutes.get(prefix, (request: Request, response: Response) => {
    return findAddressController.handle(request, response)
})

addressRoutes.delete(prefix, (request: Request, response: Response) => {
    return deleteAddressController.handle(request, response)
})

addressRoutes.put(prefix, (request: Request, response: Response) => {
    return updateAddressController.handle(request, response)
})

export { addressRoutes }