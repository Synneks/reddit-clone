import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  user: 'postgres',
  password: 'postgres',
  dbName: 'redditclone',
  driver: PostgreSqlDriver,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
