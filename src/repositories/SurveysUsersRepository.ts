import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveysUsers";

@EntityRepository(SurveyUser)
class SurveysUserRepository extends Repository<SurveyUser> {}

export { SurveysUserRepository };
