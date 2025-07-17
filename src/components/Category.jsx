import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Category = () => {
    const [Categories,setCategories] = useState([
        {
            id:1,
            cate_name:"Shirt Type",
            icon:<MdArrowDropDown/>,
            dropdown:[
                {   
                    id:1,
                    type_name:"Nike",
                    link:"#"
                },
                 {   
                    id:2,
                    type_name:"Pomar",
                    link:"#"
                },
                 {   
                    id:3,
                    type_name:"Adidas",
                    link:"#"
                },
                 {   
                    id:4,
                    type_name:"FBT",
                    link:"#"
                },

            ]
        },
         {
            id:2,
            cate_name:"Price",
            icon:<MdArrowDropDown/>,
            dropdown:[
                {   
                    id:1,
                    type_name:"10$",
                    link:"#"
                },
                 {   
                    id:2,
                    type_name:"20$",
                    link:"#"
                },
                 {   
                    id:3,
                    type_name:"30$",
                    link:"#"
                },
                 {   
                    id:4,
                    type_name:"50$",
                    link:"#"
                },

            ] 
        },
         {
            id:3,
            cate_name:"Popular", 
            icon:<MdArrowDropDown/>,
            dropdown:[
                {   
                    id:1,
                    type_name:"Nike",
                    link:"#"
                },
                 {   
                    id:2,
                    type_name:"Adidas",
                    link:"#"
                },
   

            ]
        },
         {
            id:4,
            cate_name:"Cheap",
        },
         {
            id:5,
            cate_name:"Expansive",

        },
         {
            id:6,
            cate_name:"All Product",

        }
    ])
     
    return ( 
        <div>
            <div className="container mt-5">
                <ul className="grid grid-cols-3 sm:flex sm:mx-1 gap-4">
                    {Categories.map((item)=>(
                        <li key={item.id} className="px-2 py-2 cursor-pointer rounded-full hover:bg-yellow-600 bg-yellow-500 group">
                            <h2 className="flex items-center text-gray-800 text-sm">
                                {item.cate_name} 
                            <span className="group-hover:rotate-0 rotate-180 duration-300 text-xl">{item.icon}</span>
                            </h2>
                            {/* dropdown */}
                            <div className="absolute mt-1 hidden group-hover:block">
                                <ul className="my-2 -mx-1 rounded-md bg-yellow-500 w-24">
                                    {item.dropdown && Array.isArray(item.dropdown) && item.dropdown.map((i)=>(
                                        <li key={i.id}
                                        className="hover:bg-yellow-600 rounded-md py-2 px-2 cursor-pointer">
                                            <h3>
                                                {i.type_name}
                                            </h3>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        
                    ))}
                    
                </ul>
            </div>
        </div>
     );
}
 
export default Category
