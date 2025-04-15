import { Injectable } from "@nestjs/common";

@Injectable()
export class Logger {
  info(message: string) {
    console.log('[info] %s', message);
  }

  error(message: string) {
    console.log('[error] %s', message);
  }
}
