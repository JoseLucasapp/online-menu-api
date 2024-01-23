import { Request, Response } from "express";
import { FindAllCategoriesUseCase } from "./FindAllCategories.usecase";

export class FindAllCategoriesController {
    constructor(private findAllCategoriesUseCase: FindAllCategoriesUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const categories = await this.findAllCategoriesUseCase.execute()
            return response.status(200).json({ data: categories })
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}