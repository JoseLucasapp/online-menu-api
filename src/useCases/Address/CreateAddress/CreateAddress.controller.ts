import { Request, Response } from "express";
import { CreateAddressUseCase } from "./CreateAddress.usecase";
import { ReturnMessages } from "../../../helpers/utils";

export class CreateAddressController {
    constructor(private createAddressUseCase: CreateAddressUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createAddressUseCase.execute(request.body)
            return response.status(201).json(ReturnMessages.success)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}