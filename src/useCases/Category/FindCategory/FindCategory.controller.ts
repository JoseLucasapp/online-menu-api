import { Request, Response } from "express";
import { FindCategoryUseCase } from "./FindCategory.usecase";

export class FindCategoryController {
    constructor(private findCategoryUseCase: FindCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const category = await this.findCategoryUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(category)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}