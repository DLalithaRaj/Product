import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateProduct {
  @Field(() => Int, {
    nullable: false,
    description: 'Product unique code',
  })
  productId: number;
  @Field(() => String, {
    nullable: false,
    description: 'Name of the product',
  })
  name: string;
  @Field(() => String, {})
  description: string;
  @Field(() => Number, { nullable: false })
  price: number;
  @Field(() => String, {})
  manufacture?: string;
  @Field(() => String, {})
  category?: string;
  @Field(() => Date, {})
  expired?: Date;
  @Field(() => Boolean, {})
  status?: boolean;
}

@InputType()
export class UpdateProduct extends PartialType(CreateProduct) {
  @Field(() => String)
  id: string;
}
