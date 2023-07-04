import { Test, TestingModule } from '@nestjs/testing';
import { ProductResolver } from './product.resolver';
import { ProductService } from '../product.service';
import { IProduct } from '../product.interface';
import { UpdateProduct } from './product.input';

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
            updateProduct: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<ProductResolver>(ProductResolver);
    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should update a product and return the updated product', async () => {
    const id = '123';
    const input: UpdateProduct = {
      productId: 101,
      name: 'new pro',
      description: 'new test case pro',
      price: 110,
    };

    // Mock the productService.updateProduct() method
    const updatedProduct: IProduct = {
      productId: 101,
      name: 'new pro',
      description: 'new test case pro',
      price: 110,
    };
    jest.spyOn(service, 'updateProduct').mockResolvedValue(updatedProduct);

    const result = await resolver.updateProduct(id, input);

    // Assert the result
    expect(result).toEqual(updatedProduct);

    expect(service.updateProduct).toHaveBeenCalledWith({
      _id: id,
      ...input,
    });
  });
});
