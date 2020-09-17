import { Request, Response } from 'express';

import CreateTechService from '../services/CreateTechService';

class TechController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTechService = new CreateTechService();

    const createdTech = await createTechService.execute({ name });

    return response.json(createdTech);
  }
}

export default TechController;
