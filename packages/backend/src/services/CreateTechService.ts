import { getRepository } from 'typeorm';

import Tech from '../entity/Tech';
import AppError from '../errors/AppError';

interface RequestDTO {
  name: string;
}

class CreateTechService {
  async execute({ name }: RequestDTO): Promise<Tech> {
    const techRepository = getRepository(Tech);

    const checkTechExists = await techRepository.findOne({ where: { name } });

    if (checkTechExists) throw new AppError('Tech does have exists');

    const createdTech = techRepository.create({ name });

    await techRepository.save(createdTech);

    return createdTech;
  }
}

export default CreateTechService;
