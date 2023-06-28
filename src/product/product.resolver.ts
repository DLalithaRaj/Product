import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductOutput } from './product.output';
import { CreateProduct } from './product.input';

import { UpdateProductOutput } from './update.output';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor (private ProductService:ProductService){}
  @Query(() => String)
  sayhi() {
    return 'Hi';
  }

  @Mutation(returns => CreateProductOutput )
  async createProduct(@Args('data') product: CreateProduct) {
    return this.ProductService.create(product);
  }

  @Query(() => CreateProductOutput)
  async getProduct(@Args('id') id: string) {
    return this.ProductService.findOne(id);
  }
  
  @Mutation(() => UpdateProductOutput)
  async updateProduct(@Args('id') id: string, @Args('input') product: CreateProduct) {
    return this.ProductService.updateProduct(id, product);
  }
}
