import img1 from '../../public/img/851b4ef5-3101-4a9d-934f-5b4e44a1b803.jpg'
import img2 from '../../public/img/pu1.jpg'
import img3 from '../../public/img/2.jpg'
import img4 from '../../public/img/adi1.jpg'
import img5 from '../../public/img/3.jpg'
import img6 from '../../public/img/adi2.jpg'
import img7 from '../../public/img/pu2.jpg'
import img8 from '../../public/img/adi3.jpg'
import img9 from '../../public/img/4.jpg'
import img10 from '../../public/img/ftb1.jpg'
import img11 from '../../public/img/adi4.jpg'
import img12 from '../../public/img/pu3.jpg'
import img13 from '../../public/img/adi5.jpg'
import img14 from '../../public/img/5.jpg'
import img15 from '../../public/img/ftb2.webp'
import img16 from '../../public/img/pu4.jpg'
import img17 from '../../public/img/adi6.jpg'
import img18 from '../../public/img/6.jpg'
import img19 from '../../public/img/pu5.jpg'
import img20 from '../../public/img/ftb3.webp'
import img21 from '../../public/img/adi7.jpg'
import img22 from '../../public/img/7.jpg'
import img23 from '../../public/img/fbt4.jpg'
import img24 from '../../public/img/pu6.jpg'
import img25 from '../../public/img/adi8.jpg'
import img26 from '../../public/img/8.jpg'
import img27 from '../../public/img/fb5.jpg'
import img28 from '../../public/img/adi9.jpg'
import img29 from '../../public/img/pu7.jpg'
import img30 from '../../public/img/9.jpg'
import img31 from '../../public/img/adi10.jpg'
import img32 from '../../public/img/10.jpg'

import { RiShoppingCart2Line } from "react-icons/ri";
import { useEffect, useState } from 'react';
const Products = () => {
    
    const [allpro,setAllpro] = useState([
        {
            "id":1,
            "pro_name":"Nike Shirt1",
            "pro_price":"23.00",
            "pro_image":img1
        },
         {
            "id":2,
            "pro_name":"Puma Shirt1",
            "pro_price":"11.00",
            "pro_image":img2
        },
         {
            "id":3,
            "pro_name":"Nike Shirt2",
            "pro_price":"25.00",
            "pro_image":img3
        },
         {
            "id":4,
            "pro_name":"Adidas Shirt1",
            "pro_price":"27.00",
            "pro_image":img4
        },
         {
            "id":5,
            "pro_name":"Nike Shirt3",
            "pro_price":"20.00",
            "pro_image":img5
        },
         {
            "id":6,
            "pro_name":"Adidas Shirt2",
            "pro_price":"24.00",
            "pro_image":img6
        },
         {
            "id":7,
            "pro_name":"Puma Shirt2",
            "pro_price":"19.00",
            "pro_image":img7
        },
         {
            "id":8,
            "pro_name":"Adidas Shirt3",
            "pro_price":"13.00",
            "pro_image":img8
        },
         {
            "id":9,
            "pro_name":"Nike Shirt4",
            "pro_price":"25.00",
            "pro_image":img9
        },
         {
            "id":10,
            "pro_name":"FBT Shirt1",
            "pro_price":"33.00",
            "pro_image":img10
        },
         {
            "id":11,
            "pro_name":"Adidas Shirt4",
            "pro_price":"22.00",
            "pro_image":img11
        },
         {
            "id":12,
            "pro_name":"Puma Shirt3",
            "pro_price":"21.00",
            "pro_image":img12
        },
         {
            "id":13,
            "pro_name":"Adidas Shirt5",
            "pro_price":"23.00",
            "pro_image":img13
        },
         {
            "id":14,
            "pro_name":"Nike Shirt5",
            "pro_price":"26.00",
            "pro_image":img14
        },
         {
            "id":15,
            "pro_name":"FBT Shirt2",
            "pro_price":"29.00",
            "pro_image":img15
        },
         {
            "id":16,
            "pro_name":"Puma Shirt4",
            "pro_price":"22.00",
            "pro_image":img16
        },
         {
            "id":17,
            "pro_name":"Adidas Shirt6",
            "pro_price":"24.00",
            "pro_image":img17
        },
         {
            "id":18,
            "pro_name":"Nike Shirt6",
            "pro_price":"21.00",
            "pro_image":img18
        },
         {
            "id":19,
            "pro_name":"Puma Shirt5",
            "pro_price":"27.00",
            "pro_image":img19
        },
         {
            "id":20,
            "pro_name":"FBT Shirt3",
            "pro_price":"28.00",
            "pro_image":img20
        },
         {
            "id":21,
            "pro_name":"Adidas Shirt7",
            "pro_price":"29.00",
            "pro_image":img21
        },
         {
            "id":22,
            "pro_name":"Nike Shirt7",
            "pro_price":"22.00",
            "pro_image":img22
        },
         {
            "id":23,
            "pro_name":"FBT Shirt4",
            "pro_price":"25.00",
            "pro_image":img23
        },
         {
            "id":24,
            "pro_name":"Puma Shirt6",
            "pro_price":"27.00",
            "pro_image":img24
        },
         {
            "id":25,
            "pro_name":"Adidas Shirt8",
            "pro_price":"21.00",
            "pro_image":img25
        },
         {
            "id":26,
            "pro_name":"Nike Shirt8",
            "pro_price":"27.00",
            "pro_image":img26
        },
         {
            "id":27,
            "pro_name":"FBT Shirt5",
            "pro_price":"26.00",
            "pro_image":img27
        },
         {
            "id":28,
            "pro_name":"Adidas Shirt9",
            "pro_price":"23.00",
            "pro_image":img28
        },
         {
            "id":29,
            "pro_name":"Puma Shirt7",
            "pro_price":"29.00",
            "pro_image":img29
        },
         {
            "id":30,
            "pro_name":"Nike Shirt9",
            "pro_price":"23.00",
            "pro_image":img30
        },
         {
            "id":31,
            "pro_name":"Adidas Shirt10",
            "pro_price":"23.00",
            "pro_image":img31
        },
         {
            "id":32,
            "pro_name":"nike Shirt10",
            "pro_price":"33.00",
            "pro_image":img32
        }
        
    ])
   

    console.log(allpro)
    return ( 
        <div className="container mt-5">
            <div>
                <hr className="border border-yellow-500"/>
            </div>
            {/* Display Product */}
            <div className='container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
                {/* card */}
                 {allpro.map((item)=>(
                    <div key={item.id} className="card w-[170px] sm:w-[250px] py-2 mt-5 rounded-md border-2 border-yellow-500 bg-gray-200">
                        <div className=' '>
                            <img src={item.pro_image} alt="" 
                            className='w-[90%] m-auto h-[150px] sm:h-[250px] rounded-md object-cover border border-gray-400'/>
                        </div>
                        <div className='mx-4'>
                            <h1 className='text-yellow-500 text-lg font-bold'>{item.pro_name}</h1>
                            <p className='font-Poppins text-sm'>{item.description}</p>
                            <p className='text-xl font-Poppins font-semibold text-red-500'>/- {item.pro_price}$</p>
                        </div>
                        <hr className='w-[80%] m-auto my-1 border border-yellow-500'/>
                        {/* add to card */}
                        <div className='flex justify-center'>
                            <button className='w-[95%] font-Poppins font-semibold
                            py-2 bg-yellow-500 text-gray-600 rounded-md hover:bg-yellow-700
                            hover:text-white'>Add to Card <RiShoppingCart2Line className='inline-block -mt-2 font-bold'/></button>
                        </div>
                    </div>
                 ))}
            </div>
            
        </div>
     );
}
 
export default Products;