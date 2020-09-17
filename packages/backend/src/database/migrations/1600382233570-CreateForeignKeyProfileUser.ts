import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateForeignKeyProfileUser1600382233570
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const foreignKeyProfileUser = new TableForeignKey({
      name: 'ProfileUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    return queryRunner.createForeignKey('profiles', foreignKeyProfileUser);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropForeignKey('profiles', 'ProfileUser');
  }
}
