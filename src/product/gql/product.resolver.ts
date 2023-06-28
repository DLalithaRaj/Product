
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductOutput } from './product.output';
import { CreateProduct } from './product.input';
import { ProductService } from '../product.service';
import { UpdateProductOutput ,DeleteProductInput} from './product.output';


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
  async createProduct(@Args('data') product: CreateProduct) {
    return this.ProductService.create(product);
  }

  @Mutation(() => UpdateProductOutput)
  async updateProduct(@Args('id') id: string, @Args('input') product: CreateProduct) {
    return this.ProductService.updateProduct(id, product);
  }


  @Mutation(() => Boolean)
  async deleteProduct(@Args('id') id: string) {
    await this.ProductService.deleteProduct(id);
    return true;
  }
}
