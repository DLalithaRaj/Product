import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { Product } from './GraphQL-IO/product.output';
import {
  CreateProductInput,
  UpdateProductInput,
} from './GraphQL-IO/product.input';
import { ProductService } from './product.service';
import { Document } from 'mongoose';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}
  @Query(() => String)
  sayhi() {
    return 'Hi';
  }

  @Mutation(() => Product)
  async createProduct(@Args('productIP') product: CreateProductInput) {
    return product;
  }

  @Query(() => [Product], { name: 'products' })
  async getAllProducts() {
    const products = await this.productService.findAll();
    return products;
  }

  @Mutation(() => Product)
  updateProduct(@Args('updateProduct') product: UpdateProductInput) {
    return this.productService.update(product.id, {
      category: product.category,
      description: product.description,
      expired: product.expired,
      manufacture: product.manufacture,
      name: product.name,
      price: product.price,
      productId: product.productId,
      status: product.status,
    });
  }
}
