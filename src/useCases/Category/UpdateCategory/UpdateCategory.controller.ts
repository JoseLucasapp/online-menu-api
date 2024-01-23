import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./UpdateCategory.usecase";
import { ReturnMessages } from "../../../helpers/utils";

export class UpdateCategoryController {
    constructor(private updateCategoryUseCase: UpdateCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.updateCategoryUseCase.execute(parseInt(request.params.id), request.body)
            return response.status(200).json(ReturnMessages.update)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}