import { Request, Response } from "express";
import { DeleteRestaurantUseCase } from "./DeleteRestaurant.usecase";
import { ReturnMessages } from "../../../helpers/utils";

export class DeleteRestaurantController {
    constructor(private deleteRestaurantUseCase: DeleteRestaurantUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.deleteRestaurantUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(ReturnMessages.delete)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}