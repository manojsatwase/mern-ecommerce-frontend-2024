export type User =  {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
}

export type Product = {
  name: string;
  price: string;
  stock:string;
  category: string;
  photo: string;
  _id: string;
}

export type ShippingInfo  = {
 address: string;
 city: string;
 state: string;
 country: string;
 pinCode: string;
}

export type CartItem = {
  productId: string;
  photo: string;
  name: string;
  price: string;
  quantity: string;
  stock: number;
 }

 export type OrderItem = Omit<CartItem,"stock"> & { _id:string };

 export type Order = {
   orderItems: OrderItem[];
   shippingInfo: ShippingInfo;
   subtotal: number;
   tax: number;
   shippingCharges: number;
   discount: number;
   total: number;
   status: string;
   user:{
    name: string;
    _id: string;
   };
   _id: string;
 }

 type CountAndChange = {
  revenue: number;
  product: number;
  user: number;
  order: number;
 }

 type LatestTransaction = {
  _id: string;
  discount: number;
  amount: number;
  quantity: number;
  status: string;
 }

 export type Stats = {
    changePercent: CountAndChange,
    count: CountAndChange,
    chart: {
      order: number[],
      revenue: number[],
    },
    categoryCount: Record<string, number>[],
    userRatio:{
      male: number;
      female: number;
    } ,
    latestTransactions: LatestTransaction[] ,
 }

type RevenueDistribution = {
  netMargin: number;
  discount: number;
  productionCost: number;
  burnt: number;
  marketingCost: number;
}

type OrderFullfillment =  {
  processing: number,
  shipped: number,
  delivered: number
}

type UsersAgeGroup = {
  teen: number;
  adult: number;
  old: number;
}

export type Pie = {
  orderFullfillment:OrderFullfillment,
  productCategories:Record<string,number>[],
  stockAvailability:{
    inStock: number;
    outOfStock: number;
  },
  revenueDistribution:RevenueDistribution,
  usersAgeGroup: UsersAgeGroup,
  adminCustomer: {
    admin: number;
    customer: number;
  }
}

export type Bar = {
  products: number[],
  users: number[],
  orders: number[]
}

export type Line = {
  users: number[],
  products: number[],
  discount: number[],
  revenue: number[],
}