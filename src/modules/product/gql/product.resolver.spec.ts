import { Test, TestingModule } from '@nestjs/testing';
import { ProductResolver } from './product.resolver';
import { ProductService } from '../product.service';
import { CreateProductInput } from './product.input';
import { ProductOutput } from './product.output';
import { IProduct } from '../product.interface';

describe('ProductResolver', () => {
  let resolver: ProductResolver;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductResolver,
        {
          provide: ProductService,
          useValue: {
            create: jest.fn().mockImplementation(() => ProductOutput),
          },
        },
      ],
    }).compile();

    resolver = module.get<ProductResolver>(ProductResolver);
    service = module.get<ProductService>(ProductService);
  });

  describe('createProduct', () => {
    it('should create a new product', async () => {
      const createProduct: CreateProductInput = {
        productId: 453423,
        name: 'dairy milk',
        description: 'chco melted cholacate',
        price: 10.0,
        manufacture: 'india',
        category: 'cholacate',
        expired: new Date('2023-06-22T13:02:43'),
        status: true,
      };

      const outputProduct = {
        _id: '6712359371231',
        productId: 453423,
        name: 'dairy milk',
        description: 'chco melted cholacate',
        price: 10.0,
        manufacture: 'india',
        category: 'cholacate',
        expired: new Date('2023-06-22T13:02:43'),
        status: true,
      };

      jest
        .spyOn(service, 'create')
        .mockResolvedValue(outputProduct as IProduct);

      const result = await resolver.createProduct(createProduct);

      expect(service.create).toHaveBeenCalledWith(createProduct);
      expect(result).toEqual(outputProduct);
    });
  });
});
