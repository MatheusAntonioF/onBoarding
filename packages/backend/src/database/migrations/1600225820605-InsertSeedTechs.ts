import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import TechSeed from '../seeds/TechSeed';

export default class InsertSeedTechs1600225820605
  implements MigrationInterface {
  public async up(): Promise<void> {
    const techsRepository = getRepository('techs');

    const techsSeed = new TechSeed().execute();

    await techsRepository.save(techsSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const techsSeed = new TechSeed().execute();

    const techsName = techsSeed.map(tech => tech.name);

    await queryRunner.query(`DELETE FROM techs WHERE name IN (${techsName})`);
  }
}
