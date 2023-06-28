import { Injectable, NotFoundException } from '@nestjs/common';
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

  

  async findOne(id: string): Promise<IProduct> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }


  async updateProduct(
    id: string,
    updateProductDto: CreateProductDTO,
  ): Promise<IProduct> {
    const product = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
