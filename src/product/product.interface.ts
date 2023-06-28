import { Document } from 'mongoose';

export interface IProduct extends Document{
    productId: number;
    name: string;
    description:string;
    price:number;
    manufacture:string;
    category:string; 
    expired:Date;
    status:boolean;
}