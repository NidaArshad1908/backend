import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Orderslist } from './entities/orderslist.entity';
import { OrderslistService } from './orderslist.service';

@ApiTags('orderslist')
@Controller('orderslist')
export class OrderslistController {
  constructor(private readonly orderslistService: OrderslistService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all Orderslist todos',
    description: 'Get all Orderslist todos',
    operationId: 'Orderslist',
  })
  @ApiOkResponse({
    description: 'Orderslist Todos found',
    type: Orderslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No Orderslist todos found' })
  async findAll(): Promise<Orderslist[]> {
    return await this.orderslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Orderslist todo by id',
    description: 'Get Orderslist todo by id',
    operationId: 'getOrderslistTodoById',
  })
  @ApiOkResponse({
    description: 'Orderslist Todo found',
    type: Orderslist,
  })
  @ApiNotFoundResponse({ description: 'Orderslist Todo not found' })
  async findById(@Param('id') id: number): Promise<Orderslist> {
    return await this.orderslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update Orderslist todo',
    description: 'Create or update Orderslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'Orderslist Todo created',
    type: Orderslist,
  })
  async createOrUpdate(@Body() todo: Orderslist) {
    console.log(
      '🚀 ~ file: orderslist.controller.ts:44 ~ OrderslistController ~ create ~ Orderslist',
      todo,
    );
    return await this.orderslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete Orderslist by ids',
    description: 'Delete Orderslist by ids',
    operationId: 'deleteOrderslistTodoByIds',
  })
  @ApiOkResponse({ description: 'Orderslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'Orderslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.orderslistService.delete(ids);
  }
}
