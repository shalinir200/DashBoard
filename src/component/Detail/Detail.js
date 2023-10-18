import React from 'react'
import {AiOutlineDollarCircle} from "react-icons/ai"
import {PiNotebookBold} from "react-icons/pi"
import {BsFillHandbagFill} from "react-icons/bs"
import {FaArrowUp , FaArrowDown} from "react-icons/fa"
import {MdOutlineAccountBalanceWallet} from "react-icons/md"

const Detail = () => {

  const data = [
    {
        id : 1 ,
        title : "Earning" ,
        price : "$198K",
        icon : <AiOutlineDollarCircle/> ,
        category : "profit",
        percentage : "37.8%"

    },
    {
        id : 2 ,
        title : "Order" ,
        price : "$4.5K",
        icon : <PiNotebookBold/> ,
        category : "loss" , 
        percentage : "5%"       
    },
    {
        id : 3 ,
        title : "Balance" ,
        price : "$2.4K",
        icon : <MdOutlineAccountBalanceWallet/> ,
        category : "loss"    ,
        percentage : "2%"          
    },
    {
        id : 4 ,
        title : " Sales" ,
        price : "$89K",
        icon : <BsFillHandbagFill/> ,
        category : "profit" ,
        percentage : "11%"             
    },
  ]



  return (
    <div>
        <div className='grid grid-cols-3 gap-5 p-5'>
            {
                data.map(item=>{
                    return (
                        <div className='flex justify-evenly items-center gap-1 bg-white rounded-lg shadow-xl p-2 h-32 '>
                            <h1 className={item.category === "profit" ? " text-3xl p-3  rounded-full text-green-600 bg-green-200 " : "bg-red-200 text-4xl p-4  rounded-full text-red-600"}>{item.icon}</h1>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-gray-600 text-xs'>{item.title}</h1>
                                <h1 className='font-semibold'>{item.price}</h1>
                              <div className='flex justify-center items-center gap-1'>
                              <h1 className=  {item.category === "profit" ? "text-green-700" : "text-red-700 text-xs " }>
                                {
                                    item.category === "profit" ? <div className='flex text-xs gap-1 '> <FaArrowUp/>  <span>{item.percentage}</span> </div>: <div className='flex text-xs gap-1 '><FaArrowDown/>  <span>{item.percentage}</span></div>
                                }
                               </h1>
                               <h1 className="text-xs"> this month</h1>
                              </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Detail