import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Countrieslist } from './entities/countrieslist.entity';
import { CountrieslistService } from './countrieslist.service';

@ApiTags('countrieslist')
@Controller('countrieslist')
export class CountrieslistController {
  constructor(private readonly countrieslistService: CountrieslistService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all Countrieslist todos',
    description: 'Get all Countrieslist todos',
    operationId: 'getAllCountrieslistTodos',
  })
  @ApiOkResponse({
    description: 'Countrieslist Todos found',
    type: Countrieslist,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No Countrieslist todos found' })
  async findAll(): Promise<Countrieslist[]> {
    return await this.countrieslistService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Countrieslist todo by id',
    description: 'Get Countrieslist todo by id',
    operationId: 'getCountrieslistTodoById',
  })
  @ApiOkResponse({
    description: 'Countrieslist Todo found',
    type: Countrieslist,
  })
  @ApiNotFoundResponse({ description: 'Countrieslist Todo not found' })
  async findById(@Param('id') id: number): Promise<Countrieslist> {
    return await this.countrieslistService.findById(id);
  }

  @Post('createOrUpdate')
  @ApiOperation({
    summary: 'Create or update Countrieslist todo',
    description: 'Create or update Countrieslist todo',
    operationId: 'createOrUpdate',
  })
  @ApiOkResponse({
    description: 'Countrieslist Todo created',
    type: Countrieslist,
  })
  async createOrUpdate(@Body() todo: Countrieslist) {
    console.log(
      '🚀 ~ file: countrieslist.controller.ts:44 ~ CountrieslistController ~ create ~ Countrieslist',
      todo,
    );
    return await this.countrieslistService.createOrUpdate(todo);
  }

  @Delete('delete')
  @ApiOperation({
    summary: 'Delete Countrieslist by ids',
    description: 'Delete Countrieslist by ids',
    operationId: 'deleteCountrieslistTodoByIds',
  })
  @ApiOkResponse({ description: 'Countrieslist Todos deleted' })
  @ApiNotFoundResponse({ description: 'Countrieslist Todo not found' })
  async delete(@Body() ids: number[]) {
    return await this.countrieslistService.delete(ids);
  }
}
