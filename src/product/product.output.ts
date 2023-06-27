import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
    @Field(type =>Int,
        {
        nullable :false,
        description : 'Prouct unique code'
    })
    Id : number;

    @Field(type=>String,
        {
        nullable :false,
        description : 'Name of the product',
    })
    Name : string;

    @Field(type=>String)
    Description? : string;

    @Field(type => Int,{
        nullable : false,
    })
    Rate : number;
}
