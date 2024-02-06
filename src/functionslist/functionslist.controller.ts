import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FunctionslistService } from './functionslist.service';
import { Functionslist } from './entities/functionslist.entity';

@ApiTags('functionslist')
@Controller('functionslist')
export class FunctionslistController {
  constructor(private readonly functionslistService: FunctionslistService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all Functionslist todos',
    description: 'Get all Functionslist todos',
    operationId: 'getAllFunctionslistTodos',
  })
  @ApiOkResponse({
    description: 'Functionslist Todos found',
    type: Functionslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No Functionslist todos found' })
  async findAll(): Promise<Functionslist[]> {
    return await this.functionslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Functionslist todo by id',
    description: 'Get Functionslist todo by id',
    operationId: 'getFunctionslistTodoById',
  })
  @ApiOkResponse({
    description: 'Functionslist Todo found',
    type: Functionslist,
  })
  @ApiNotFoundResponse({ description: 'Functionslist Todo not found' })
  async findById(@Param('id') id: number): Promise<Functionslist> {
    return await this.functionslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update Functionslist todo',
    description: 'Create or update Functionslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'Functionslist Todo created',
    type: Functionslist,
  })
  async createOrUpdate(@Body() todo: Functionslist) {
    console.log(
      '🚀 ~ file: functionslist.controller.ts:44 ~ Functionslist ~ create ~ Functionslist',
      todo,
    );
    return await this.functionslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete Functionslist by ids',
    description: 'Delete Functionslist by ids',
    operationId: 'deleteFunctionslistTodoByIds',
  })
  @ApiOkResponse({ description: 'Functionslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'Functionslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.functionslistService.delete(ids);
  }
}
