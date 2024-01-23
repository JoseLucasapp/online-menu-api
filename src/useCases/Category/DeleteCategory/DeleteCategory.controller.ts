import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "./DeleteCategory.usecase";
import { ReturnMessages } from "../../../helpers/utils";

export class DeleteCategoryController {
    constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.deleteCategoryUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(ReturnMessages.delete)
        } catch (error) {
            return response.status(500).json({
                error
            })
        }
    }
}