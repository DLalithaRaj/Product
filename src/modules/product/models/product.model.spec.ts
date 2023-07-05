import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product /*ProductSchema*/ } from './product.model';
import { IProduct } from '../product.interface';

describe('ProductSchema', () => {
  let productModel: Model<IProduct>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(Product.name),
          useValue: Model,
        },
      ],
    }).compile();

    productModel = module.get<Model<IProduct>>(getModelToken(Product.name));
  });

  describe('Product Schema', () => {
    it('should be defined', () => {
      expect(productModel).toBeDefined();
    });

    it('should have the required fields', () => {
      //test
    });
  });
});
