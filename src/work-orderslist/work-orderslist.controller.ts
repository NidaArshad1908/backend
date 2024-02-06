import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { WorkOrderslist } from './entities/work-orderslist.entity';
import { WorkOrderslistService } from './work-orderslist.service';

@ApiTags('workorderslist')
@Controller('workorderslist')
export class WorkOrderslistController {
  constructor(private readonly workOrderslistService: WorkOrderslistService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all WorkOrderslist todos',
    description: 'Get all WorkOrderslist todos',
    operationId: 'WorkOrderslist',
  })
  @ApiOkResponse({
    description: 'WorkOrderslist Todos found',
    type: WorkOrderslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No WorkOrderslist todos found' })
  async findAll(): Promise<WorkOrderslist[]> {
    return await this.workOrderslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get WorkOrderslist todo by id',
    description: 'Get WorkOrderslist todo by id',
    operationId: 'getWorkOrderslistTodoById',
  })
  @ApiOkResponse({
    description: 'WorkOrderslist Todo found',
    type: WorkOrderslist,
  })
  @ApiNotFoundResponse({ description: 'WorkOrderslist Todo not found' })
  async findById(@Param('id') id: number): Promise<WorkOrderslist> {
    return await this.workOrderslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update WorkOrderslist todo',
    description: 'Create or update WorkOrderslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'WorkOrderslist Todo created',
    type: WorkOrderslist,
  })
  async createOrUpdate(@Body() todo: WorkOrderslist) {
    console.log(
      '🚀 ~ file: work-orderslist.controller.ts:44 ~ WorkOrderslistController ~ create ~ userslist',
      todo,
    );
    return await this.workOrderslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete WorkOrderslist todo by ids',
    description: 'Delete WorkOrderslist todo by ids',
    operationId: 'deleteWorkOrderslistTodoByIds',
  })
  @ApiOkResponse({ description: 'WorkOrderslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'WorkOrderslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.workOrderslistService.delete(ids);
  }
}
