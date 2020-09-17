import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddProfileFieldToUser1600267577818
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'profile',
        type: 'uuid',
        isNullable: true,
      })
    );

    return queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'UserProfile',
        columnNames: ['profile'],
        referencedColumnNames: ['id'],
        referencedTableName: 'profiles',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'UserProfile');

    return queryRunner.dropColumn('users', 'profile');
  }
}
