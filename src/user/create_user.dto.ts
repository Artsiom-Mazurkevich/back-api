import { ApiProperty } from '@nestjs/swagger';

export class Create_UserDto {
   @ApiProperty({ example: 'user@email.com', description: 'email address' })
   readonly email: string;
   @ApiProperty({ example: '785214562786', description: 'password' })
   readonly password: string;
}
