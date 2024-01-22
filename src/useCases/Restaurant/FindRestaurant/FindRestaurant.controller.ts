import { Request, Response } from "express";
import { FindRestaurantUseCase } from "./FindRestaurant.usecase";

export class FindRestaurantController {
    constructor(private findRestaurantUseCase: FindRestaurantUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const restaurant = await this.findRestaurantUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(restaurant)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}