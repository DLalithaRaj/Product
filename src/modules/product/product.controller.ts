import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { UpdateProductDTO } from './dto/update-product.dto';
import { CreateProductDTO } from './dto/create-product.dto';
import { IUpdateProduct } from './product.interface';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDTO) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }
  @Patch(':id')
  updateProduct(@Body() body: IUpdateProduct, @Param('id') id: string) {
    return this.productService.updateProduct({
      ...body,
      _id: id,
    });
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @Patch()
  update(@Body() body: UpdateProductDTO) {
    return this.productService.updateProduct(body);
  }
}
