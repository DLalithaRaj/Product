import { Test, TestingModule } from '@nestjs/testing';
import { ProductResolver } from './product.resolver';
import { ProductService } from '../product.service';
import { UpdateProduct, CreateProductInput } from './product.input';
import { ProductOutput } from './product.output';
import { IProduct } from '../product.interface';

describe('ProductResolver', () => {
  let resolver: ProductResolver;
  let service: ProductService;
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductResolver,
        {
          provide: ProductService,
          useValue: {
            updateProduct: jest.fn().mockImplementation(() => ProductOutput),
            create: jest.fn().mockImplementation(() => ProductOutput),
            findAll: jest.fn().mockImplementation(() => [ProductOutput]),
            getProductById: jest.fn().mockImplementation(() => ProductOutput),
            deleteProduct: jest.fn().mockImplementation(() => ProductOutput),
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

      jest
        .spyOn(service, 'create')
        .mockResolvedValue(outputProduct as IProduct);

      const result = await resolver.createProduct(createProduct);

      expect(service.create).toHaveBeenCalledWith(createProduct);
      expect(result).toEqual(outputProduct);
    });
  });

  it('updateProduct', async () => {
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

  it('findAll >>> should return all products', async () => {
    // Mock the productService.findAll() method
    const products: any[] = [outputProduct];
    jest.spyOn(service, 'findAll').mockResolvedValue(products);

    // Invoke the resolver method
    const result = await resolver.getAll();

    // Assert the result
    expect(result).toEqual(products);

    // Verify that the productService.findAll() method was called
    expect(service.findAll).toHaveBeenCalled();
  });

  it('getProduct >>> should return a specific product', async () => {
    // Mock data
    const id = '123jhghf45678bjvscj56y65';

    // Mock the productService.getProductById() method
    const product: IProduct = {
      productId: 101,
      name: 'new Test pro',
      description: 'test pro description',
      price: 210,
    };
    jest.spyOn(service, 'getProductById').mockResolvedValue(product);

    // Invoke the resolver method
    const result = await resolver.getProduct(id);

    // Assert the result
    expect(result).toEqual(product);

    expect(service.getProductById).toHaveBeenCalledWith(id);
  });

  it('should delete a product', async () => {
    // Mock the productService.deleteProduct method
    const mockDeleteProduct = jest
      .fn()
      .mockResolvedValue('Product deleted successfully');
    service.deleteProduct = mockDeleteProduct;

    // Perform the deleteProduct mutation
    const result = await service.deleteProduct('123');

    expect(mockDeleteProduct).toHaveBeenCalledWith('123');

    // Expect the result to be the success message
    expect(result).toBe('Product deleted successfully');
  });
});
