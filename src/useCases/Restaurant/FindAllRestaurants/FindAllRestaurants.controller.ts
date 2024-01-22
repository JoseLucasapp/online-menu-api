import { Request, Response } from "express";
import { FindAllRestaurantsUseCase } from "./FindAllRestaurants.usecase";

export class FindAllRestaurantsController {
    constructor(private findAllRestaurantsUseCase: FindAllRestaurantsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const restaurant = await this.findAllRestaurantsUseCase.execute(request.query)
            return response.status(200).json({ data: restaurant })
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}