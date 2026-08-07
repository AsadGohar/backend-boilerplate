import {
  // common
  Module,
} from '@nestjs/common';

import { UsersController } from './users.controller';

import { UsersService } from './users.service';

import { FilesModule } from '../files/files.module';

import { RelationalUserPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

// <database-block>
const infrastructurePersistenceModule = RelationalUserPersistenceModule;
// </database-block>

@Module({
  imports: [
    // import modules, etc.
    infrastructurePersistenceModule,
    FilesModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, infrastructurePersistenceModule],
})
export class UsersModule {}
