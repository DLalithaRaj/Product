
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductOutput } from './product.output';
import { CreateProductInput } from './product.input';
import { ProductService } from '../product.service';
import { UpdateProductOutput } from './product.output';


@Resolver()
export class ProductResolver {
  constructor (private ProductService:ProductService){}
  @Query(() => String)
  sayhi() {
    return 'Hi';
  }

  @Query(() => CreateProductOutput)
  async getProduct(@Args('id') id: string) {
    return this.ProductService.findOne(id);
  }

  @Mutation(() => CreateProductOutput )
  async createProduct(@Args('data') product: CreateProductInput) {
    return this.ProductService.create(product);
  }

  @Mutation(() => UpdateProductOutput)
  async updateProduct(@Args('id') id: string, @Args('input') product: CreateProductInput) {
    return this.ProductService.updateProduct(id, product);
  }
}
