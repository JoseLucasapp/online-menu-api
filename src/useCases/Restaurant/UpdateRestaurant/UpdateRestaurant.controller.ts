import { Request, Response } from "express";
import { UpdateRestaurantUseCase } from "./UpdateRestaurant.usecase";
import { ReturnMessages } from "../../../helpers/utils";

export class UpdateRestaurantController {
    constructor(private updateRestaurantUseCase: UpdateRestaurantUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.updateRestaurantUseCase.execute(parseInt(request.params.id), request.body)
            return response.status(200).json(ReturnMessages.update)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}