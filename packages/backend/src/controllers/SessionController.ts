import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionController {
  async signIn(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticaUserService = new AuthenticateUserService();

    const { token, user } = await authenticaUserService.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ token, user });
  }
}

export default SessionController;
