import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { TotalSaleslistService } from './total-saleslist.service';
import { TotalSaleslist } from './entities/total-saleslist.entity';

@ApiTags('totalsaleslist')
@Controller('totalsaleslist')
export class TotalSaleslistController {
  constructor(private readonly totalSaleslistService: TotalSaleslistService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all TotalSaleslist todos',
    description: 'Get all TotalSaleslist todos',
    operationId: 'getAllTotalSaleslistTodos',
  })
  @ApiOkResponse({
    description: 'TotalSaleslist Todos found',
    type: TotalSaleslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No TotalSaleslist todos found' })
  async findAll(): Promise<TotalSaleslist[]> {
    return await this.totalSaleslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get TotalSaleslist todo by id',
    description: 'Get TotalSaleslist todo by id',
    operationId: 'getTotalSaleslistTodoById',
  })
  @ApiOkResponse({
    description: 'TotalSaleslist Todo found',
    type: TotalSaleslist,
  })
  @ApiNotFoundResponse({ description: 'TotalSaleslist Todo not found' })
  async findById(@Param('id') id: number): Promise<TotalSaleslist> {
    return await this.totalSaleslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update TotalSaleslist todo',
    description: 'Create or update TotalSaleslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'TotalSaleslist Todo created',
    type: TotalSaleslist,
  })
  async createOrUpdate(@Body() todo: TotalSaleslist) {
    console.log(
      '🚀 ~ file: total-saleslist.controller.ts:44 ~ TotalSaleslistController ~ create ~ TotalSaleslist',
      todo,
    );
    return await this.totalSaleslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete TotalSaleslist by ids',
    description: 'Delete TotalSaleslist by ids',
    operationId: 'deleteTotalSaleslistTodoByIds',
  })
  @ApiOkResponse({ description: 'TotalSaleslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'TotalSaleslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.totalSaleslistService.delete(ids);
  }
}
