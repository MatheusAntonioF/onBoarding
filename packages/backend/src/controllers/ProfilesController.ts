import { Request, Response } from 'express';

import CreateProfileService from '../services/CreateProfileService';

class ProfileController {
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
