shift + alt + o  unneccessry import file remove 

 



//---------------------------------
// sample data all products



import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";



interface DataType {
    photo: ReactElement;
    name: string;
    price: number;
    stock: number;
    action: ReactElement;
  }
  
  const columns: Column<DataType>[] = [
    {
      Header: "Photo",
      accessor: "photo",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Stock",
      accessor: "stock",
    },
    {
      Header: "Action",
      accessor: "action",
    },
  ];
  

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: Array<DataType> = [
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
];



//---------------------------------------------------
product management

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";


------------------------------
 cart.ts

const cartItems = [
  {
    productId:"adsfdssdsa",
    photo:"https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SR254,254_QL65_.jpg",
    name:"mackbook",
    price:57000,
    quantity:1,
    stock:10,
  }
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;



------------------ transaction

const arr: Array<DataType> = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    status: <span className="red">Processing</span>,
    quantity: 3,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },

  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];

//-----------------------

 {
            _id:"asdasdafdsfsdf",
            amount:4566,
            quantity:25,
            discount:2000,
            status:<span className="red">processing</span>,
            action:<Link to={`/order/asdasda`}>View</Link>
}

//----------- 
transaction management
 const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItem[] = [
  {
    name: "Puma Shoes",
    photo: img,
    id: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];

-----------------

customer 

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: Array<DataType> = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];


-----------------

import data from "../../assets/data.json";

dashboard 
const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";

 <BarChart
      data_2={[300, 144, 433, 655, 237, 755, 190]}
      data_1={[200, 444, 343, 556, 778, 455, 990]}
      title_1="Revenue"
      title_2="Transaction"
      bgColor_1="rgb(0, 115, 255)"
      bgColor_2="rgba(53, 162, 235, 0.8)"
  />