import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController{
    async handle(req: Request, response: Response){
        const {user_id} = req;

        const listUserSendComplimentsService = new ListUserSendComplimentsService()
        const compliments = await listUserSendComplimentsService.execute(user_id)

        return response.json(compliments)
    }
}

export {ListUserSendComplimentsController}