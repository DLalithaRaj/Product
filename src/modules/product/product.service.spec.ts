import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { Product } from './models/product.model';
import { IProduct } from './product.interface';
import { getModelToken } from '@nestjs/mongoose';

describe('ProductService', () => {
  let service: ProductService;
  let productModel : Product

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService,{
        provide:getModelToken('Product'),
        useValue:{}
      }],
    }).compile();
    productModel = module.get<IProduct>(getModelToken('Product'));
    service = module.get<ProductService>(ProductService);
  });

  describe('createProduct service', () => {
    it('should create a new product in service', async () => {
      console.log("hi");
    })
  })
});
