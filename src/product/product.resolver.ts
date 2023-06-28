import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { CreateProductOutput } from './product.output';
import { CreateProduct } from './product.input';
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
}
