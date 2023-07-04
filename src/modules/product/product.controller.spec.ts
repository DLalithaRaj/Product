import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { IProduct, IUpdateProduct } from './product.interface';
import { ProductRepository } from './product.repository';

describe('ProductController', () => {
  let controller: ProductController;
  let productService: ProductService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [ProductController],
        providers: [
          ProductService,
          {
            provide: ProductRepository,
           useValue: {
            createProduct : jest.fn().mockImplementation(IProduct => IProduct)
          }
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
  describe('get product',()=>{
    it("get one product",async()=>{

      const id = "1387219712wer387236";
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

      jest.spyOn(productService,"getProductById").mockResolvedValue(outputProduct as IProduct);
      const result = await controller.findOne(id);
      expect(productService.getProductById).toHaveBeenCalledWith(id);
      expect(result).toEqual(outputProduct);
    })
  })

  describe('update product',()=>{
    it("update product",async ()=>{
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
      const id :string = outputProduct._id;
      jest.spyOn(productService,'updateProduct').mockResolvedValue(outputProduct);
      const result = await controller.updateProduct(outputProduct as IUpdateProduct,id);
      expect(productService.updateProduct).toHaveBeenCalledWith(outputProduct);
      expect(result).toEqual(outputProduct);
    })
  })

  describe('delete product',()=>{
    it("delete product with id",async()=>{
      const id = "1387219712wer387236";
      const outputDeleteProduct = `Product with id ${id} has been deleted successfully`;
      jest.spyOn(productService,"deleteProduct").mockResolvedValue(outputDeleteProduct);
      const result = await controller.remove(id);
      expect(productService.deleteProduct).toHaveBeenCalledWith(id);
      expect(result).toEqual(outputDeleteProduct);
    })
  })
});
