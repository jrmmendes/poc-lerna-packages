"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const profile_module_1 = require("./profile.module");
const profile_service_1 = require("./profile.service");
const bootstrap = async () => {
    const app = await core_1.NestFactory.createApplicationContext(profile_module_1.ProfileModule);
    const service = app.get(profile_service_1.ProfileService);
    service.print();
};
bootstrap();
