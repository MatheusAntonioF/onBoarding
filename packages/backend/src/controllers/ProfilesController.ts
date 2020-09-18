import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import CreateProfileService from '../services/CreateProfileService';
import Profile from '../entity/Profile';

class ProfileController {
  async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const profileRepository = getRepository(Profile);

    const profile = await profileRepository.findOne({ where: { user_id } });

    return response.json(profile);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { yearExperience, techs } = request.body;

    const { user_id } = request.params;

    const createProfileService = new CreateProfileService();

    const createdProfile = await createProfileService.execute({
      yearExperience,
      techs,
      user_id,
    });

    return response.json(createdProfile);
  }
}

export default ProfileController;
