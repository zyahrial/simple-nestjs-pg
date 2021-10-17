
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, } from 'class-validator';
import Todo from '../model/todos.entity';

// export class CreateTodoDto {
//     title: string;
//     content: string;
//     f_done: boolean;
//   }
  
export class CreateTodoDto implements Readonly<CreateTodoDto> {
  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  content: string;

  @ApiProperty({ required: true })
  @IsString()
  f_done: boolean;
  // public static from(dto: Partial<CustomerMainParentMenuDTO>) {
  //   const it = new CustomerMainParentMenuDTO();
  //   it.id = dto.id;
  //   it.name = dto.name;
  //   it.icon = dto.icon;
  //   it.path = dto.path;
  //   return it;
  // }

  // public static fromEntity(entity: CustomerMainParentMenu) {
  //   return this.from({
  //     id: entity.id,
  //     name: entity.name,
  //     icon: entity.icon,
  //     path: entity.path
  //   });
  }

  export default CreateTodoDto;
