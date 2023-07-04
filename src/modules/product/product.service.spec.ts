import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { createProduct,outputProduct } from './product';
import { ProductRepository } from './product.repository';
import { IProduct } from './product.interface';
import { CreateProductDTO } from './dto/create-product.dto';
import { getModelToken } from '@nestjs/mongoose';


describe('ProductService', () => {
  let service: ProductService;
  let repository: ProductRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService,
        {
          provide: ProductRepository,
          useValue: {
            createProduct : jest.fn().mockImplementation(IProduct => IProduct),
            getProductById : jest.fn().mockImplementation(IProduct => IProduct)
          }
        }],
    }).compile();
    service = module.get<ProductService>(ProductService);
    repository = module.get<ProductRepository>(ProductRepository);
  });

  describe('create',()=>{
    
    it('should create a new product', async () =>{
      jest.spyOn(repository,'createProduct').mockResolvedValueOnce(outputProduct as IProduct)
      const result = await service.create(createProduct);
      expect(repository.createProduct).toBeCalled(); 
      expect(repository.createProduct).toBeCalledWith(createProduct);
      expect(result).toEqual(outputProduct);
    })
  })
  
  describe('get one',()=>{
    it('should get a product by id', async () =>{
      const id = "hq6712359371231";
      jest.spyOn(repository,'getProductById').mockResolvedValueOnce(outputProduct as IProduct)
      const result = await service.getProductById(id);
      expect(repository.getProductById).toBeCalled(); 
      expect(repository.getProductById).toBeCalledWith(id);
      expect(result).toEqual(outputProduct);
    })
  })

  

  });

