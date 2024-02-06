import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CustomerslistService } from './customerslist.service';
import { Customerslist } from './entities/customerslist.entity';

@ApiTags('customerslist')
@Controller('customerslist')
export class CustomerslistController {
  constructor(private readonly customerslistService: CustomerslistService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all Customerslist todos',
    description: 'Get all Customerslist todos',
    operationId: 'getAllCustomerslistTodos',
  })
  @ApiOkResponse({
    description: 'Customerslist Todos found',
    type: Customerslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No Customerslist todos found' })
  async findAll(): Promise<Customerslist[]> {
    return await this.customerslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Customerslist todo by id',
    description: 'Get Customerslist todo by id',
    operationId: 'getCustomerslistTodoById',
  })
  @ApiOkResponse({
    description: 'Customerslist Todo found',
    type: Customerslist,
  })
  @ApiNotFoundResponse({ description: 'Customerslist Todo not found' })
  async findById(@Param('id') id: number): Promise<Customerslist> {
    return await this.customerslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update Customerslist todo',
    description: 'Create or update Customerslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'Customerslist Todo created',
    type: Customerslist,
  })
  async createOrUpdate(@Body() todo: Customerslist) {
    console.log(
      '🚀 ~ file: customerslist.controller.ts:44 ~ CustomerslistController ~ create ~ Customerslist',
      todo,
    );
    return await this.customerslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete Customerslist by ids',
    description: 'Delete Customerslist by ids',
    operationId: 'deleteCustomerslistTodoByIds',
  })
  @ApiOkResponse({ description: 'Customerslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'Customerslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.customerslistService.delete(ids);
  }
}
