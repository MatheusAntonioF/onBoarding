import { getRepository } from 'typeorm';

import Tech from '../entity/Tech';

interface RequestDTO {
  id: string;
}

class DeleteTechService {
  async execute({ id }: RequestDTO): Promise<void> {
    const techRepository = getRepository(Tech);

    await techRepository.delete(id);
  }
}

export default DeleteTechService;
