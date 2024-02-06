import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UsersListService } from './users-list.service';
import { UsersList } from './entities/users-list.entity';

@ApiTags('userslist')
@Controller('userslist')
export class UsersListController {
  constructor(private readonly usersListService: UsersListService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all userlist todos',
    description: 'Get all userlist todos',
    operationId: 'getAlluserlistTodos',
  })
  @ApiOkResponse({
    description: 'userlist Todos found',
    type: UsersList,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No userlist todos found' })
  async findAll(): Promise<UsersList[]> {
    return await this.usersListService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get userlist todo by id',
    description: 'Get userlist todo by id',
    operationId: 'getuserlistTodoById',
  })
  @ApiOkResponse({ description: 'userlist Todo found', type: UsersList })
  @ApiNotFoundResponse({ description: 'userlist Todo not found' })
  async findById(@Param('id') id: number): Promise<UsersList> {
    return await this.usersListService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update userlist todo',
    description: 'Create or update userlist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({ description: 'userlist Todo created', type: UsersList })
  async createOrUpdate(@Body() todo: UsersList) {
    console.log(
      '🚀 ~ file: users-list.controller.ts:44 ~ UsersListController ~ create ~ userslist',
      todo,
    );
    return await this.usersListService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete userlist todo by ids',
    description: 'Delete userlist todo by ids',
    operationId: 'deleteuserlistTodoByIds',
  })
  @ApiOkResponse({ description: 'userlist Todos deleted' })
  @ApiNotFoundResponse({ description: 'userlist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.usersListService.delete(ids);
  }
}
