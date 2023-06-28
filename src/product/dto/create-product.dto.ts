export class CreateProductDto {
  name: string;
  productId: number;
  description: string;
  price: number;
  manufacture: string;
  category: string;
  expired: Date;
  status: boolean;
}
