import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
   @ApiProperty({ example: 'ADMIN', description: 'role for user' })
   readonly value: string;
   @ApiProperty({ example: 'Administrator', description: 'role for user' })
   readonly description: string;
}
