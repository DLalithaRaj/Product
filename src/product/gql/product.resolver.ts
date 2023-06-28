import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductOutput } from './product.output';
import { CreateProduct, UpdateProduct } from './product.input';
import { ProductService } from '../product.service';
import { UpdateProductOutput, DeleteProductInput } from './product.output';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}
  @Query(() => String)
  sayhi() {
    return 'Hi';
  }

  @Query(() => CreateProductOutput)
  async getProduct(@Args('id') id: string) {
    return this.productService.findOne(id);
  }

  @Mutation(() => CreateProductOutput)
  async createProduct(@Args('data') product: CreateProduct) {
    return this.productService.create(product);
  }

  // @Mutation(() => UpdateProductOutput)
  // async updateProduct(
  //   @Args('id') id: string,
  //   @Args('input') product: CreateProduct,
  // ) {
  //   return this.ProductService.updateProduct(id, product);
  // }
  @Mutation(() => UpdateProductOutput)
  updateProduct(@Args('data') product: UpdateProduct) {
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

  @Mutation(() => Boolean)
  async deleteProduct(@Args('id') id: string) {
    await this.productService.deleteProduct(id);
    return true;
  }
}
