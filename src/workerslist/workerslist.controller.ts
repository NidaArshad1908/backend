import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Workerslist } from './entities/workerslist.entity';
import { WorkerslistService } from './workerslist.service';

@ApiTags('workerslist')
@Controller('workerslist')
export class WorkerslistController {
  constructor(private readonly workerslistService: WorkerslistService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all Workerslist todos',
    description: 'Get all Workerslist todos',
    operationId: 'Workerslist',
  })
  @ApiOkResponse({
    description: 'Workerslist Todos found',
    type: Workerslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No Workerslist todos found' })
  async findAll(): Promise<Workerslist[]> {
    return await this.workerslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Workerslist todo by id',
    description: 'Get Workerslist todo by id',
    operationId: 'getWorkerslistTodoById',
  })
  @ApiOkResponse({
    description: 'Workerslist Todo found',
    type: Workerslist,
  })
  @ApiNotFoundResponse({ description: 'Workerslist Todo not found' })
  async findById(@Param('id') id: number): Promise<Workerslist> {
    return await this.workerslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update Workerslist todo',
    description: 'Create or update Workerslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'Workerslist Todo created',
    type: Workerslist,
  })
  async createOrUpdate(@Body() todo: Workerslist) {
    console.log(
      '🚀 ~ file: workerslist.controller.ts:44 ~ WorkerslistController ~ create ~ Workerslist',
      todo,
    );
    return await this.workerslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete Workerslist todo by ids',
    description: 'Delete Workerslist todo by ids',
    operationId: 'deleteWorkerslistTodoByIds',
  })
  @ApiOkResponse({ description: 'Workerslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'Workerslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.workerslistService.delete(ids);
  }
}
