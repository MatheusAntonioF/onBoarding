import { getRepository } from 'typeorm';

import Tech from '../entity/Tech';

class ListTechsService {
  async execute(): Promise<Tech[]> {
    const techRepository = getRepository(Tech);

    const findedTechs = await techRepository.find();

    return findedTechs;
  }
}

export default ListTechsService;
