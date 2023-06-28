import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateProductOutput {

  @Field((type) => String, {
    nullable: false,
    description: 'Prouct _id',
  })
    _id: number;
  @Field((type) => Int, {
    nullable: false,
    description: 'Prouct unique code',
  })
    productId: number;
  @Field(type=>String,
        {
        nullable :false,
        description : 'Name of the product',
    })
    name : string;

    @Field(type=>String)
    description? : string;

    @Field(type => Int,{
        nullable : false,
    })
    price : number;
   
    @Field(type => String, {})
    manufacture: string;

   @Field(type => String, {})
   category: string;

   @Field(type => Date, {})
   expired: Date;

   @Field(type => Boolean, {})
   status: boolean;

}
