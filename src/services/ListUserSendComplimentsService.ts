import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const complimnets = await complimentsRepositories.find({
            where: {
                user_sender: user_id
            }
        })

        return complimnets
    }
}

export {ListUserSendComplimentsService}