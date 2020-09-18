import { getRepository, In } from 'typeorm';

import Tech from '../entity/Tech';
import Profile from '../entity/Profile';

import AppError from '../errors/AppError';
import User from '../entity/User';

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

    const userRepository = getRepository(User);

    const techRepository = getRepository(Tech);

    const checkExistsProfile = await profileRepository.findOne({
      where: { user_id },
    });

    if (checkExistsProfile) throw new AppError('This user already was profile');

    const user = await userRepository.findOne({ where: { id: user_id } });

    if (!user) throw new AppError('User dont exists');

    const techsExisting = await techRepository.find({
      where: { name: In(techs) },
    });

    const createdProfile = profileRepository.create({
      yearExperience,
      user_id,
      techs: techsExisting,
    });

    await profileRepository.save(createdProfile);

    return createdProfile;
  }
}

export default CreateProfileService;
