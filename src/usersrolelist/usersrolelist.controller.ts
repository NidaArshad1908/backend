import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UsersrolelistService } from './usersrolelist.service';
import { Usersrolelist } from './entities/usersrolelist.entity';

@ApiTags('usersrolelist')
@Controller('usersrolelist')
export class UsersrolelistController {
  constructor(private readonly usersrolelistService: UsersrolelistService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all usersrolelist todos',
    description: 'Get all usersrolelist todos',
    operationId: 'usersrolelist',
  })
  @ApiOkResponse({
    description: 'usersrolelist Todos found',
    type: Usersrolelist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No usersrolelist todos found' })
  async findAll(): Promise<Usersrolelist[]> {
    return await this.usersrolelistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get usersrolelist todo by id',
    description: 'Get usersrolelist todo by id',
    operationId: 'getusersrolelistTodoById',
  })
  @ApiOkResponse({
    description: 'usersrolelist Todo found',
    type: Usersrolelist,
  })
  @ApiNotFoundResponse({ description: 'usersrolelist Todo not found' })
  async findById(@Param('id') id: number): Promise<Usersrolelist> {
    return await this.usersrolelistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update usersrolelist todo',
    description: 'Create or update usersrolelist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'usersrolelist Todo created',
    type: Usersrolelist,
  })
  async createOrUpdate(@Body() todo: Usersrolelist) {
    console.log(
      '🚀 ~ file: usersrolelist.controller.ts:44 ~ UsersrolelistController ~ create ~ userslist',
      todo,
    );
    return await this.usersrolelistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete usersrolelist todo by ids',
    description: 'Delete usersrolelist todo by ids',
    operationId: 'deleteusersrolelistTodoByIds',
  })
  @ApiOkResponse({ description: 'usersrolelist Todos deleted' })
  @ApiNotFoundResponse({ description: 'usersrolelist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.usersrolelistService.delete(ids);
  }
}
