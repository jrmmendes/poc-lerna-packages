import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  validate(username: string, password: string) {
    return username === 'root' && password === 'toor'
  }
}
