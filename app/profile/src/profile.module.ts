import { Module } from '@nestjs/common';
import { CoreModule } from '@poc/core';
import { ProfileService } from './profile.service';


@Module({
  imports: [CoreModule],
  providers: [ProfileService]
})
export class ProfileModule {}
