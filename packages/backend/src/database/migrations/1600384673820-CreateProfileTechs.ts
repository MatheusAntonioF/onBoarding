import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateProfileTechs1600384673820
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'profile_techs',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'profile_id',
            type: 'uuid',
          },
          {
            name: 'tech_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );

    const foreignKeyProfileId = new TableForeignKey({
      name: 'ProfileId',
      columnNames: ['profile_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'profiles',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    const foreignKeyTechId = new TableForeignKey({
      name: 'TechId',
      columnNames: ['tech_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'techs',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryRunner.createForeignKeys('profile_techs', [
      foreignKeyProfileId,
      foreignKeyTechId,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('profile_techs', 'ProfileId');

    await queryRunner.dropForeignKey('profile_techs', 'TechId');

    await queryRunner.dropTable('profile_techs');
  }
}
