import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String)
  id: string;

  @Field(() => Int, {
    description: 'Prouct unique code',
  })
  productId: number;

  @Field(() => String, {
    description: 'Name of the product',
  })
  name: string;

  @Field(() => String, { defaultValue: '' })
  description: string;

  @Field(() => Int)
  price: number;

  @Field(() => String, { defaultValue: '' })
  manufacture: string;

  @Field(() => String)
  category: string;

  @Field(() => Date)
  expired: Date;

  @Field(() => Boolean)
  status: boolean;
}
