import { Request, Response } from "express";
import { UpdateAddressUseCase } from "./UpdateAddress.usecase";
import { ReturnMessages } from "../../../helpers/utils";

export class UpdateAddressController {
    constructor(private updateAddressUseCase: UpdateAddressUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.updateAddressUseCase.execute(parseInt(request.params.id), request.body)
            return response.status(200).json(ReturnMessages.update)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}