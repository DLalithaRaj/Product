import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { IProduct } from './product.interface';

describe('ProductController', () => {
  let controller: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService,
        {
          provide: 'ProductModel',
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const createProduct: CreateProductDTO = {
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
        _id: 'hq6712359371231',
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
        .spyOn(productService, 'create')
        .mockResolvedValue(outputProduct as IProduct);
      const result = await controller.create(createProduct);

      expect(productService.create).toHaveBeenCalledWith(createProduct);
      expect(result).toEqual(outputProduct);
    });
  });
});
