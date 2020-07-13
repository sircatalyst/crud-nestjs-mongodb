import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
// import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
// import { Request, Response } from 'express';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  //   @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  // 	  console.log(req);
  // 	  console.log(res);
  // return ees.send('Hello world')
  //     return 'Get all items';
  //   }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemService.deleted(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.update(id, updateItemDto);
  }
}
