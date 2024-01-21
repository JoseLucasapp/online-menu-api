import { Request, Response } from "express";
import { DeleteAddressUseCase } from "./DeleteAddress.usecase";
import { ReturnMessages } from "../../../helpers/utils";

export class DeleteAddressController {
    constructor(private deleteAddressUseCase: DeleteAddressUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.deleteAddressUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(ReturnMessages.delete)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}