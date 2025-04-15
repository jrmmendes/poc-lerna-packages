import { Injectable } from "@nestjs/common";

@Injectable()
export class Logger {
  info(message: string) {
    console.log('[info] %s', message);
  }

  error(message: string) {
    console.error('[error] %s', message);
  }

  warn(message: string) {
    console.warn('[warn] %s', message);
  }

  debug(message: string) {
    console.debug('[debug] %s', message);
  }

}
