import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllProductsResponse, CategoriesResponse, MessageResponse, NewProductRequest, ProductResponse, SearchProductRequest, SearchProductsResponse, DeleteProductRequest, UpdateProductRequest } from "../../types/api-types";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product/`, // base url
  }),
  tagTypes:["product"],  // catching
  endpoints: (builder) => ({
    // second query argument query(s) kich le nhi rahe hai to string pass kardo doesn't matter
    latestProducts: builder.query<AllProductsResponse, string>({
      // query parameter query(s)
      query: () => "latest", // endpoint URL
      providesTags: ["product"]
    }),

    allProducts: builder.query<AllProductsResponse, string>({
      query: (id) => `admin-products?id=${id}`,
      providesTags: ["product"]
    }),

    categories: builder.query<CategoriesResponse, string>({
      query: () => "categories",
      providesTags: ["product"]
    }),
    
    searchProduct: builder.query<SearchProductsResponse, SearchProductRequest>({
      query: ({price,search,sort,category,page}) => {
       /*
        const url = new URL( 'all');
        
        url.searchParams.set('search', search);
        url.searchParams.set('page', String(page));
        url.searchParams.set('price', String(price));
        url.searchParams.set('sort',sort);
        url.searchParams.set('category',category)
    
        const baseQuery = url.href;

        */

        let baseQuery = `all?search=${search}&page=${page}`;

        if(price) baseQuery += `&price=${price}`;
        if(sort) baseQuery += `&sort=${sort}`;
        if(category) baseQuery += `&category=${category}`;

        return baseQuery;  
      },
      providesTags: ["product"]

    }), 

    productDetails: builder.query<ProductResponse, string>({
      // query parameter query(s)
      query: (id) => id, // endpoint URL
      providesTags: ["product"]
    }),
    
    newProduct: builder.mutation<MessageResponse,NewProductRequest>({
      query:({formData,id}) => ({
         url:`new?id=${id}`,
         method:"POST",
         body:formData
      }), 
      invalidatesTags:["product"] // invalidate catching
    }),

    updateProduct: builder.mutation<MessageResponse,UpdateProductRequest>({
      query:({formData,userId,productId}) => ({
         url:`${productId}?id=${userId}`,
         method:"PUT",
         body:formData
      }), 
      invalidatesTags:["product"] // invalidate catching
    }),

    deleteProduct: builder.mutation<MessageResponse,DeleteProductRequest>({
      query:({userId,productId}) => ({
         url:`${productId}?id=${userId}`,
         method:"DELETE",
      }), 
      invalidatesTags:["product"] // invalidate catching
    }),

  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useCategoriesQuery,
  useSearchProductQuery,
  useNewProductMutation,
  useProductDetailsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productAPI;
