import { NestFactory } from "@nestjs/core"
import { ProfileModule } from './profile.module';
import { ProfileService } from "./profile.service";

const bootstrap = async () => {
  const app = await NestFactory.createApplicationContext(ProfileModule)
  const service = app.get(ProfileService);
  service.print();
}

bootstrap();
