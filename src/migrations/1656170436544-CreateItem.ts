import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateItem1656170436544 implements MigrationInterface {
  name = 'CreateItem1656170436544';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item" ADD "updatedAt" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "updatedAt"`);
  }
}
