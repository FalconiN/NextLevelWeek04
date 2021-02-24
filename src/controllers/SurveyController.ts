import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveysRepository } from '../repositories/SurveyRepository'

class SurveysController {
    async create(req: Request, res: Response){
        const { title, desciption } = req.body

        const surveysRepository = getCustomRepository(SurveysRepository)

        const survey = surveysRepository.create({
            title,
            desciption
        })
        
        await surveysRepository.save(survey)

        return res.status(201).json(survey)
        // return res.json(survey)
    }

    async show(req: Request, res: Response){
        const surveysRepository = getCustomRepository(SurveysRepository)
        
        const all = await surveysRepository.find()

        return res.json(all)
    }
}

export { SurveysController }