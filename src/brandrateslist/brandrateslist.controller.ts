import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BrandrateslistService } from './brandrateslist.service';
import { Brandrateslist } from './entities/brandrateslist.entity';

@ApiTags('brandrateslist')
@Controller('brandrateslist')
export class BrandrateslistController {
  constructor(private readonly brandrateslistService: BrandrateslistService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all Brandrateslist todos',
    description: 'Get all Brandrateslist todos',
    operationId: 'getAllBrandrateslistTodos',
  })
  @ApiOkResponse({
    description: 'Brandrateslist Todos found',
    type: Brandrateslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No Brandrateslist todos found' })
  async findAll(): Promise<Brandrateslist[]> {
    return await this.brandrateslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Brandrateslist todo by id',
    description: 'Get Brandrateslist todo by id',
    operationId: 'getBrandrateslistTodoById',
  })
  @ApiOkResponse({
    description: 'Brandrateslist Todo found',
    type: Brandrateslist,
  })
  @ApiNotFoundResponse({ description: 'Brandrateslist Todo not found' })
  async findById(@Param('id') id: number): Promise<Brandrateslist> {
    return await this.brandrateslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update Brandrateslist todo',
    description: 'Create or update Brandrateslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'Brandrateslist Todo created',
    type: Brandrateslist,
  })
  async createOrUpdate(@Body() todo: Brandrateslist) {
    console.log(
      '🚀 ~ file: brandrateslist.controller.ts:44 ~ BrandrateslistController ~ create ~ Brandrateslist',
      todo,
    );
    return await this.brandrateslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete Brandrateslist by ids',
    description: 'Delete Brandrateslist by ids',
    operationId: 'deleteBrandrateslistTodoByIds',
  })
  @ApiOkResponse({ description: 'Brandrateslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'Brandrateslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.brandrateslistService.delete(ids);
  }
}
