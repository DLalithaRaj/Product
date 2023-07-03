import { Injectable, NotFoundException } from '@nestjs/common';
import { IUpdateProduct, IProduct } from './product.interface';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDTO): Promise<IProduct> {
      return this.productRepository.createProduct(createProductDto);
  }

  findAll() {
    return `This action returns all product`;
  }

  async getProductById(id: string): Promise<IProduct> {
   return await this.productRepository.getProductById(id);
  }


  async updateProduct(
    id: string,
    updateProductDto: IUpdateProduct,
  ): Promise<IProduct> {
    return await this.productRepository.updateProduct(updateProductDto);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
