import { InjectModel } from "@nestjs/mongoose";
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from "./models/product.model";
import { Model } from "mongoose";
import { IUpdateProduct, IProduct } from "./product.interface";
import { InternalServerErrorException, NotFoundException } from "@nestjs/common";


export class ProductRepository {
    
    constructor(@InjectModel(Product.name) private readonly product: Model<IProduct>) {}
    async createProduct(createProductDto: CreateProductDTO) :Promise<IProduct> {
        try {
            const product = new this.product(createProductDto);
            const newproduct =await product.save();
            return newproduct ;
          } catch (e) {
            throw new Error(e);
          }
        }
     
        async getProductById(id:string) {
          let product;
          try {
              product = await this.product.findById({_id:id}).exec();
          } catch (error) {
              throw new InternalServerErrorException(error);
          }
  
          if (!product) {
              throw new NotFoundException('The product with this id does not exist');
          }
  
          return product;
       }

        async updateProduct(updateProduct: IUpdateProduct) {
          let product;
          try {
              product = await this.product
                  .findOneAndUpdate({ _id: updateProduct._id }, updateProduct, {
                      new: true,
                  })
                  .exec();
          } catch (error) {
              throw new InternalServerErrorException(error);
          }
  
          if (!product) {
              throw new NotFoundException('Error trying to update product');
          }
  
          return product;
      }
          
    }