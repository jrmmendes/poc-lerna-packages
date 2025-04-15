import { Injectable } from "@nestjs/common";
import { Logger } from "@poc/core";

@Injectable()
export class AuthService {

  constructor(private readonly logger: Logger) {
  }

  validate(username: string, password: string) {
    if(username === 'root' && password === 'toor') {
      this.logger.info('> user logged in with success');
    }

    this.logger.error('> invalid username or password');
  }
}
