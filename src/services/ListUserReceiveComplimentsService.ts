import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const complimnets = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            }
        })

        return complimnets
    }
}

export {ListUserReceiveComplimentsService}