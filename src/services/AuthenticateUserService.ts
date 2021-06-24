import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{
    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({
            email
        })

        if (!user) {
            throw new Error("Email incorrect or inexistents")
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Password is incorrect")
        }

        const token = sign({
            email: user.email
        }, "351ff0ba6ff8a782b39f702af276ffc9",
        {
            subject: user.id,
            expiresIn: "1d"
        }
        )

        return token
    }
}

export {AuthenticateUserService}