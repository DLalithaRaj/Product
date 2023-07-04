import { Model } from 'mongoose';
import { ProductRepository } from './product.repository';
import { IProduct } from './product.interface';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from './models/product.model';


describe('ProductRepository', () => {
  let productRepository: ProductRepository;
  let productModel: Model<IProduct>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers: [
            ProductRepository,
          {
            provide: getModelToken('Product'),
            useClass:Product
          }
        ],
      }).compile();
  });

  it('should create a new product', async () => {
    // Assert any other expectations about the created product
  });
});
