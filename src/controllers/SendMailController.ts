import { Request, response, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UserRepository'
import { SurveysRepository } from '../repositories/SurveysRepository'
import { SurveysUserRepository } from '../repositories/SurveysUsersRepository'

class SendMailController {

    async execute(request: Request, reposnse: Response) {
        const { email, survey_id } = request.body

        const usersRepository = getCustomRepository(UsersRepository)
        const surveysRepository = getCustomRepository(SurveysRepository)
        const surveysUsersRepository = getCustomRepository(SurveysUserRepository)


        const userAlreadyExists = await usersRepository.findOne({ email })

        if (!userAlreadyExists) {
            return response.status(400).json({
                error: "User does not exists"
            })
        }

        const SurveyAlreadyExists = await surveysRepository.findOne({ id: survey_id })

        if(!SurveyAlreadyExists) {
            return response.status(400).json({
                error: "Survey does not exists"
            })
        }
    }
}


export { SendMailController } 