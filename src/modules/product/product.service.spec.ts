import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { createProduct,outputProduct } from './product';
import { ProductRepository } from './product.repository';
import { IProduct } from './product.interface';
import { CreateProductDTO } from './dto/create-product.dto';

// import { CreateProductDTO } from './dto/create-product.dto';
 import { getModelToken } from '@nestjs/mongoose';
// import { Product } from './models/product.model';
// import { Model } from 'mongoose';


describe('ProductService', () => {
  let service: ProductService;
  let repository: ProductRepository;
  
//  const mockProductRepository = {
//   createProduct : jest.fn().mockImplementation(IProduct => IProduct)
//  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService,
        {
          provide: ProductRepository,
          useValue: {
            createProduct : jest.fn().mockImplementation(IProduct => IProduct)
          }
        }],
    }).compile();
  //  productModel = module.get<IProduct>(getModelToken('Product'));
    service = module.get<ProductService>(ProductService);
    repository = module.get<ProductRepository>(ProductRepository);
  });

  describe('create',()=>{
    
    it('should create a new product', async () =>{
      jest.spyOn(repository,'createProduct').mockResolvedValueOnce(outputProduct as IProduct)
      const result = await service.create(createProduct); console.log('result : ',result)
      expect(repository.createProduct).toBeCalled(); 
      expect(repository.createProduct).toBeCalledWith(createProduct);
      expect(result).toEqual(outputProduct);
    })
  })
  
  });

