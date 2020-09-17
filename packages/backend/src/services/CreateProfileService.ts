import { getRepository, In } from 'typeorm';

import Tech from '../entity/Tech';
import Profile from '../entity/Profile';

import AppError from '../errors/AppError';

interface RequestDTO {
  yearExperience: number;
  techs: string[];
  user_id: string;
}

class CreateProfileService {
  async execute({
    yearExperience,
    techs,
    user_id,
  }: RequestDTO): Promise<Profile> {
    const profileRepository = getRepository(Profile);

    const techRepository = getRepository(Tech);

    const checkExistsProfile = await profileRepository.findOne({
      where: { user: user_id },
    });

    if (checkExistsProfile) throw new AppError('This user already was profile');

    const serializeTechs = await techRepository.find({
      where: {
        name: In(techs),
      },
    });

    const profile = profileRepository.create({
      yearExperience,
      user: user_id,
      techs: serializeTechs,
    });

    return profile;
  }
}

export default CreateProfileService;
