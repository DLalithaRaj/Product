import { Injectable } from '@nestjs/common';
import { UpdateProductDTO } from './dto/update-product.dto';
import { IProduct } from './product.interface';
import { CreateProductDTO } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel:Model<IProduct>){}
  async create(createProductDto: CreateProductDTO):Promise<IProduct> {
    try {
      const product = new this.productModel(createProductDto);
      return await product.save();
    } catch (e) {
      throw new Error(e);
    }
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDTO) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
