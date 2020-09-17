import { Request, Response } from 'express';

import CreateTechService from '../services/CreateTechService';
import DeleteTechService from '../services/DeleteTechService';

class TechController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTechService = new CreateTechService();

    const createdTech = await createTechService.execute({ name });

    return response.json(createdTech);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTechService = new DeleteTechService();

    await deleteTechService.execute({ id });

    return response.status(200).send();
  }
}

export default TechController;
