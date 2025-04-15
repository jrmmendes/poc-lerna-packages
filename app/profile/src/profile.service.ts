import { Injectable } from "@nestjs/common";
import { Logger } from "@poc/core";

@Injectable()
export class ProfileService {
  constructor(private readonly logger: Logger) {}
  
  print() {
    this.logger.info('info message');
    this.logger.error('error message');
  }
}
