/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { ProductRepository } from './product.repository';
import { IProduct } from './product.interface';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from './models/product.model';
import { createProduct, outputProduct } from './product';

describe('ProductRepository', () => {
  let productRepository: ProductRepository;
  let productModel: Model<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductRepository,
        {
          provide: getModelToken(Product.name),
          useValue: {
            findById: jest.fn().mockImplementation((IProduct) => IProduct),
            findOneAndUpdate: jest
              .fn()
              .mockImplementation((IProduct) => IProduct),
            findByIdAndDelete: jest
              .fn()
              .mockImplementation((IProduct) => IProduct),
          },
        },
      ],
    }).compile();
    productRepository = module.get<ProductRepository>(ProductRepository);
    productModel = module.get<Model<Product>>(getModelToken(Product.name));
  });

  it('should create a new product', async () => {
    // Assert any other expectations about the created produc
  });

  it('get the product', async () => {
    //clg
    const id = 'hq6712359371231';
    jest.spyOn(productModel, 'findById').mockResolvedValue(outputProduct);
    const result = await productRepository.getProductById(id);
    expect(result).toEqual(outputProduct);
  });
  it('update the product', async () => {
    jest
      .spyOn(productModel, 'findOneAndUpdate')
      .mockResolvedValue(outputProduct);
    const result = await productRepository.updateProduct(createProduct);
    expect(result).toEqual(outputProduct);
  });

  it('delete the product', async () => {
    const id = 'hq6712359371231';
    jest
      .spyOn(productModel, 'findByIdAndDelete')
      .mockResolvedValue(outputProduct);

    const result = await productRepository.deleteProduct(id);
    expect(result).toEqual(true);
  });
});
