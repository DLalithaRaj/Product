
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductOutput } from './product.output';
import { CreateProductInput, UpdateProduct } from './product.input';
import { ProductService } from '../product.service';


@Resolver()
export class ProductResolver {
  constructor (private ProductService:ProductService){}
  
  @Query(() => ProductOutput)
  async getProduct(@Args('id') id: string) {
    return this.ProductService.getProductById(id);
  }

  @Mutation(() => ProductOutput)
  async createProduct(@Args('data') product: CreateProductInput) {
    return this.ProductService.create(product);
  }

  @Mutation(() => ProductOutput)
  async updateProduct(@Args('id') id: string, @Args('input') product: UpdateProduct) {
    return this.ProductService.updateProduct(id, product);
  }

  @Mutation(() => String)
  async deleteProduct(@Args('id') id: string) {
    return this.ProductService.deleteProduct(id);
  }
}
