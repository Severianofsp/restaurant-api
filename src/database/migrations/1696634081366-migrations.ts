import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateUserMigration1696634081366
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE IF NOT EXISTS "user"(' +
                'id BIGSERIAl PRIMARY KEY,' +
                'name VARCHAR(100) NOT NULL,' +
                'document VARCHAR(15) UNIQUE NOT NULL,' +
                'email VARCHAR(255) UNIQUE NOT NULL,' +
                'password VARCHAR NOT NULL,' +
                'created_at TIMESTAMP NOT NULL,' +
                'update_at TIMESTAMP)'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE IF EXISTS "user"');
    }
}
