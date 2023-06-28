import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateProductOutput {
  @Field((type) => String, {
    nullable: false,
    description: 'Prouct _id',
  })
  _id: string;
  @Field((type) => Int, {
    nullable: false,
    description: 'Prouct unique code',
  })
  productId: number;
  @Field((type) => String, {
    nullable: false,
    description: 'Name of the product',
  })
  name: string;

  @Field((type) => String)
  description?: string;

  @Field((type) => Int, {
    nullable: false,
  })
  price: number;

  @Field((type) => String, {})
  manufacture: string;

  @Field((type) => String, {})
  category: string;

  @Field((type) => Date, {})
  expired: Date;

  @Field((type) => Boolean, {})
  status: boolean;
}

// @ObjectType()
// export class UpdateProductOutput {
//   @Field((type) => String, {
//     nullable: false,
//     description: 'Prouct _id',
//   })

//   @Field((type) => Int, {
//     nullable: false,
//     description: 'Prouct unique code',
//   })
//     productId: number;
//   @Field((type) => String, {})
//     name: string;
//   @Field((type) => String, {})
//     description: string;
//   @Field((type) => Number, {})
//     price: number;
//   @Field((type) => String, {})
//     manufacture: string;
//   @Field((type) => String, {})
//     category: string;
//   @Field((type) => Date, {})
//     expired: Date;
//   @Field((type) => Boolean, {})
//     status: boolean;
// }
@ObjectType()
export class UpdateProductOutput {
  @Field(() => String)
  id: string;

  @Field(() => Int, {
    description: 'Product unique code',
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
