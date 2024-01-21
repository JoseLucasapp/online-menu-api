import { Request, Response } from "express";
import { FindAddressUseCase } from "./FindAddress.usecase";

export class FindAddressController {
    constructor(private findAddressUseCase: FindAddressUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const address = await this.findAddressUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(address)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}