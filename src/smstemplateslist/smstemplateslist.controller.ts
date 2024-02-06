import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SmstemplateslistService } from './smstemplateslist.service';
import { Smstemplateslist } from './entities/smstemplateslist.entity';

@ApiTags('smstemplateslist')
@Controller('smstemplateslist')
export class SmstemplateslistController {
  constructor(
    private readonly smstemplateslistService: SmstemplateslistService,
  ) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all Smstemplateslist todos',
    description: 'Get all Smstemplateslist todos',
    operationId: 'getAllSmstemplateslistTodos',
  })
  @ApiOkResponse({
    description: 'Smstemplateslist Todos found',
    type: Smstemplateslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No Smstemplateslist todos found' })
  async findAll(): Promise<Smstemplateslist[]> {
    return await this.smstemplateslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Smstemplateslist todo by id',
    description: 'Get Smstemplateslist todo by id',
    operationId: 'getSmstemplateslistTodoById',
  })
  @ApiOkResponse({
    description: 'Smstemplateslist Todo found',
    type: Smstemplateslist,
  })
  @ApiNotFoundResponse({ description: 'Smstemplateslist Todo not found' })
  async findById(@Param('id') id: number): Promise<Smstemplateslist> {
    return await this.smstemplateslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update Smstemplateslist todo',
    description: 'Create or update Smstemplateslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'Smstemplateslist Todo created',
    type: Smstemplateslist,
  })
  async createOrUpdate(@Body() todo: Smstemplateslist) {
    console.log(
      '🚀 ~ file: smstemplateslist.controller.ts:44 ~ SmstemplateslistController ~ create ~ Smstemplateslist',
      todo,
    );
    return await this.smstemplateslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete Smstemplateslist by ids',
    description: 'Delete Smstemplateslist by ids',
    operationId: 'deleteSmstemplateslistTodoByIds',
  })
  @ApiOkResponse({ description: 'Smstemplateslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'Smstemplateslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.smstemplateslistService.delete(ids);
  }
}
