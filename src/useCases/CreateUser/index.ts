import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUserRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const postgresUsersRepository:IUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailTrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
	postgresUsersRepository,
	mailtrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }