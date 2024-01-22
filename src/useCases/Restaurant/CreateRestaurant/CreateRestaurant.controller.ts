import { Request, Response } from "express";
import { CreateRestaurantUseCase } from "./CreateRestaurant.usecase";
import { ReturnMessages } from "../../../helpers/utils";

export class CreateRestaurantController {
    constructor(private createRestaurantUseCase: CreateRestaurantUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createRestaurantUseCase.execute(request.body)
            return response.status(201).json(ReturnMessages.success)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}