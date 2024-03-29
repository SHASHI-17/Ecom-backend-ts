import { NextFunction, Request, Response } from "express";


export interface NewUserRequestBody {
    _id: string,
    name: string,
    photo: string,
    email: string,
    role: string,
    gender: string,
    dob: Date,
}

export interface NewProductRequestBody {
    name: string,
    category: string,
    price: number,
    stock: number
}

export type ControllerType = (req: Request,
    res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;

export type SearchRequestQuery = {
    search?: string,
    price?: number,
    category?: string,
    sort?: string,
    page?: string,
}

export interface BaseQuery {
    name?: {
        $regex: string,
        $options: string
    },
    price?: {
        $lte: number,
    };
    category?: string;
}

export type invalidatesCacheProps = {
    product?: boolean,
    order?: boolean,
    admin?: boolean,
    userId?:string,
    orderId?:string,
    productId?:string | string[]
}


export type OrderItemType = {
    name: string,
    photo: string,
    price: number,
    quantity: number,
    productId: string
}

export type ShippingInfoType = {
    address: string,
    city: string,
    state: string,
    country: string,
    pincode: string,
}

export interface NewOrderRequestBody {
    shippingInfo: ShippingInfoType,
    user: string,
    subtotal: string,
    tax: number,
    shippingCharges: number,
    discount: number,
    total: number,
    status?: string,
    orderItems: OrderItemType[]
}

