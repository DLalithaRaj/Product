import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop()
  name: string;

  @Prop()
  productId: number;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  manufacture: string;

  @Prop()
  category: string;

  @Prop()
  expired: Date;

  @Prop()
  status: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
