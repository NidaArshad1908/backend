import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { WorkerService } from './worker.service';
import { Worker } from './entities/worker.entity';

@ApiTags('worker')
@Controller()
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all worker todos',
    description: 'Get all worker todos',
    operationId: 'getAllWorkerTodos',
  })
  @ApiOkResponse({
    description: 'Worker Todos found',
    type: Worker,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No worker todos found' })
  async findAll(): Promise<Worker[]> {
    return await this.workerService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get worker todo by id',
    description: 'Get worker todo by id',
    operationId: 'getWorkerTodoById',
  })
  @ApiOkResponse({ description: 'Worker Todo found', type: Worker })
  @ApiNotFoundResponse({ description: 'Worker Todo not found' })
  async findById(@Param('id') id: number): Promise<Worker> {
    return await this.workerService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update worker todo',
    description: 'Create or update worker todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({ description: 'Worker Todo created', type: Worker })
  async createOrUpdate(@Body() todo: Worker) {
    console.log(
      '🚀 ~ file: worker.controller.ts:44 ~ WorkerController ~ create ~ worker',
      todo,
    );
    return await this.workerService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete workertodo by ids',
    description: 'Delete workertodo by ids',
    operationId: 'deleteWorkerTodoByIds',
  })
  @ApiOkResponse({ description: 'Worker Todos deleted' })
  @ApiNotFoundResponse({ description: 'Worker Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.workerService.delete(ids);
  }
}
