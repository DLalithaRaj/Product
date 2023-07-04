import { Test, TestingModule } from '@nestjs/testing';
import { ProductResolver } from './product.resolver';
import { ProductService } from '../product.service';
import { UpdateProduct, CreateProductInput } from './product.input';
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
            updateProduct: jest.fn().mockImplementation(() => ProductOutput),
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
