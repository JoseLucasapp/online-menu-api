import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategory.usecase";
import { ReturnMessages } from "../../../helpers/utils";

export class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createCategoryUseCase.execute(request.body)
            return response.status(201).json(ReturnMessages.success)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}