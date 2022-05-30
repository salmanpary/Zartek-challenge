import axios from "axios";
import React, { useState, useEffect } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { GrSquare } from "react-icons/gr";

const Custom = () => {
  return <p className="text-red-500">customization available</p>;
};
const NotAvailable = () => {
  return <div className="text-red-500">Not available</div>;
};
const Button = () => {
  const [number, setnumber] = useState(0);
  return (
    <>
      <div className="button bg-green-500 flex justify-evenly w-24 rounded-2xl">
        <button
          className="text-white"
          onClick={() => {
            if (number === 0) {
              return;
            }

            setnumber(number - 1);
          }}
        >
          -
        </button>
        <div className="number text-white">{number}</div>
        <button
          className="text-white"
          onClick={() => {
            setnumber(number + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

const Products = () => {
  const [section, setsection] = useState([]);
  const [selected, setselected] = useState("Salads and Soup");
  const [salad, setsaladandsoup] = useState([]);
  const [barn, setbarn] = useState([]);
  const [hen, sethen] = useState([]);
  const [sea, setsea] = useState([]);
  const [biriyani, setbiriyani] = useState([]);
  const [fastfood, setfastfood] = useState([]);
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
      .then((res) => {
        setsection(res.data[0].table_menu_list);
        setsaladandsoup(res.data[0].table_menu_list[0].category_dishes);
        setbarn(res.data[0].table_menu_list[1].category_dishes);
        sethen(res.data[0].table_menu_list[2].category_dishes);
        setsea(res.data[0].table_menu_list[3].category_dishes);
        setbiriyani(res.data[0].table_menu_list[4].category_dishes);
        setfastfood(res.data[0].table_menu_list[5].category_dishes);
      })
      .catch((e) => console.log(e));
  }, []);

  const clickhandle = (itemId) => () => {
    setselected(itemId);
  };

  return (
    <>
      <div className="whitespace-nowrap">
        <ScrollMenu>
          {section &&
            section.map((item, index) => {
              return (
                <p
                  id={index}
                  className={
                    item.menu_category === selected
                      ? `p-2 text-red-500 underline underline-offset-8  decoration-red-700 font-bold`
                      : `p-2 font-bold`
                  }
                  key={index}
                  onClick={clickhandle(item.menu_category)}
                >
                  {item.menu_category}
                </p>
              );
            })}
        </ScrollMenu>
      </div>

      {selected === "Salads and Soup" &&
        salad &&
        salad.map((item, index) => {
          return (
            <>
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
                <Button></Button>
              </div>
              <div className="pl-7">
                {item.addonCat.length > 0 ? <Custom></Custom> : null}
                {!item.dish_Availability && <NotAvailable />}
              </div>

              <hr className="m-4 bg-slate-300" />
            </>
          );
        })}
      {selected === "From The Barnyard" &&
        barn &&
        barn.map((item, index) => {
          return (
            <>
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
                <div className="flex justify-end sm:ml-auto">
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
                <Button></Button>
              </div>
              <div className="pl-7">
                {item.addonCat.length > 0 ? <Custom></Custom> : null}
                {!item.dish_Availability && <NotAvailable />}
              </div>
              <hr className="m-4 bg-slate-300" />
            </>
          );
        })}
      {selected === "From the Hen House" &&
        hen &&
        hen.map((item, index) => {
          return (
            <>
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
                <div className="flex justify-end sm:ml-auto">
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
                <Button></Button>
              </div>
              <div className="pl-7">
                {item.addonCat.length > 0 ? <Custom></Custom> : null}
                {!item.dish_Availability && <NotAvailable />}
              </div>
              <hr className="m-4 bg-slate-300" />
            </>
          );
        })}
      {selected === "Fresh From The Sea" &&
        sea &&
        sea.map((item, index) => {
          return (
            <>
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
                <div className="flex justify-end sm:ml-auto">
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
                <Button></Button>
              </div>
              <div className="pl-7">
                {item.addonCat.length > 0 ? <Custom></Custom> : null}
              </div>
              <hr className="m-4 bg-slate-300" />
            </>
          );
        })}
      {selected === "Biryani" &&
        biriyani &&
        biriyani.map((item, index) => {
          return (
            <>
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
                <div className="flex justify-end  flex-auto">
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
                <Button></Button>
              </div>
              <div className="pl-7">
                {item.addonCat.length > 0 ? <Custom></Custom> : null}
                {!item.dish_Availability && <NotAvailable />}
              </div>
              <hr className="m-4 bg-slate-300" />
            </>
          );
        })}
      {selected === "Fast Food" &&
        fastfood &&
        fastfood.map((item, index) => {
          return (
            <>
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
                <div className="flex ml-auto">
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
                <Button></Button>
              </div>
              <div className="pl-7">
                {item.addonCat.length > 0 ? <Custom></Custom> : null}
                {!item.dish_Availability && <NotAvailable />}
              </div>
              <hr className="m-4 bg-slate-300" />
            </>
          );
        })}
    </>
  );
};

export default Products;
