import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SaleInvoiceslist } from './entities/sale-invoiceslist.entity';
import { SaleInvoiceslistService } from './sale-invoiceslist.service';

@ApiTags('saleinvoiceslist')
@Controller('saleinvoiceslist')
export class SaleInvoiceslistController {
  constructor(
    private readonly saleInvoiceslistService: SaleInvoiceslistService,
  ) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all SaleInvoiceslist todos',
    description: 'Get all SaleInvoiceslist todos',
    operationId: 'getAllSaleInvoiceslistTodos',
  })
  @ApiOkResponse({
    description: 'SaleInvoiceslist Todos found',
    type: SaleInvoiceslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No SaleInvoiceslist todos found' })
  async findAll(): Promise<SaleInvoiceslist[]> {
    return await this.saleInvoiceslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get SaleInvoiceslist todo by id',
    description: 'Get SaleInvoiceslist todo by id',
    operationId: 'getSaleInvoiceslistTodoById',
  })
  @ApiOkResponse({
    description: 'SaleInvoiceslist Todo found',
    type: SaleInvoiceslist,
  })
  @ApiNotFoundResponse({ description: 'SaleInvoiceslist Todo not found' })
  async findById(@Param('id') id: number): Promise<SaleInvoiceslist> {
    return await this.saleInvoiceslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update SaleInvoiceslist todo',
    description: 'Create or update SaleInvoiceslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'SaleInvoiceslist Todo created',
    type: SaleInvoiceslist,
  })
  async createOrUpdate(@Body() todo: SaleInvoiceslist) {
    console.log(
      '🚀 ~ file: sale-invoiceslist.controller.ts:44 ~ SaleInvoiceslistController ~ create ~ SaleInvoiceslist',
      todo,
    );
    return await this.saleInvoiceslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete SaleInvoiceslist by ids',
    description: 'Delete SaleInvoiceslist by ids',
    operationId: 'deleteSaleInvoiceslistTodoByIds',
  })
  @ApiOkResponse({ description: 'SaleInvoiceslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'SaleInvoiceslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.saleInvoiceslistService.delete(ids);
  }
}
