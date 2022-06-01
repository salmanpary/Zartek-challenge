import React from "react";
import { GrSquare } from "react-icons/gr";
import { Custom,NotAvailable } from "../components/Products";
const Order=(props)=>{
    return (
        props.item.map((item)=>{
            return (
                <div key={item.dish_id}>
              <div className="flex">
                <div>
                  <div className="inline-flex">
                    <GrSquare
                      color={item.dish_Type === 2 ? "green" : "red"}
                      className="m-2"
                    />
                    <h1 className="font-bold m-1">{item.dish_name}</h1>
                  </div>
                  <div className="pl-9 font-bold">
                    {item.dish_currency} {item.dish_price}
                  </div>
                  <div className="text-gray-400 pl-8">
                    {item.dish_description}
                  </div>
                </div>
                <div className="flex justify-end new:ml-auto">
                  <div className="whitespace-nowrap font-bold pr-2 pt-8">
                    {item.dish_calories} calories
                  </div>
                  <img
                    src={item.dish_image}
                    alt="salad"
                    className="rounded-md w-24 pr-2 mr-2"
                  />
                </div>
              </div>
              <div className="pl-9 pt-2 pb-2">
            Quantity:{props.newweak.get(item)}
              </div>
              <div className="pl-7">
                {item.addonCat.length > 0 ? <Custom></Custom> : null}
                {!item.dish_Availability && <NotAvailable />}
              </div>

              <hr className="m-4 bg-slate-300" />
            </div>
            )
        })
        
    )

}
export default Order