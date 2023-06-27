import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { Product } from './product.output';
import { CreateProduct } from './product.input';

@Resolver()
export class ProductResolver {
  @Query(() => String)
  sayhi() {
    return 'Hi';
  }

  @Mutation(returns => Product )
  async createProduct(@Args('productIP') product: CreateProduct) {
    return product;
  }
}
