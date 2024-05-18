import React, { useState } from 'react';

const Checkout = ({ items, onSubmit }: any) => {

    const total = items.reduce((accumulator: number, item: any) => accumulator + (+item.product.price * +item.quantity), 0);
    const [cash, setCash] = useState(0);
    const change = cash - total;

    return <div className="select-none h-auto w-full text-center pt-3 pb-4 px-4">
        <div className="flex mb-3 text-lg font-semibold text-blue-gray-700">
            <div>TOTAL</div>
            <div className="text-right w-full">PHP {total}</div>
        </div>
        <div className="mb-3 text-blue-gray-700 px-3 pt-2 pb-3 rounded-lg bg-blue-gray-50">
            <div className="flex text-lg font-semibold">
                <div className="flex-grow text-left">CASH</div>
                <div className="flex text-right">
                    <div className="mr-2">PHP</div>
                    <input value={cash} type="number" onChange={(event) => {
                        setCash(+event.target.value);
                    }} className="w-28 text-right bg-white shadow rounded-lg focus:bg-white focus:shadow-lg px-2 focus:outline-none" />
                </div>
            </div>
            <hr className="my-2" />
            <div className="grid grid-cols-3 gap-2 mt-2">
                <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm" onClick={() => setCash(cash + 20)}>+<span>20</span></button>
                <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm" onClick={() => setCash(cash + 50)}>+<span>50</span></button>
                <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm" onClick={() => setCash(cash + 100)}>+<span>100</span></button>
                <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm" onClick={() => setCash(cash + 200)}>+<span>200</span></button>
                <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm" onClick={() => setCash(cash + 500)}>+<span>500</span></button>
                <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm" onClick={() => setCash(cash + 1000)}>+<span>1000</span></button>
                <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm" onClick={() => setCash(0)}><span>C</span></button>
                <button className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm" onClick={() => setCash(total)}><span>Exact</span></button>
            </div>
        </div>
        {
            total > 0
            && (
                change >= 0 ?
                    <div className="flex mb-3 text-lg font-semibold bg-orange-50 text-blue-gray-700 rounded-lg py-2 px-3">
                        <div className="text-orange-800">CHANGE</div>
                        <div className="text-right flex-grow text-orange-600">PHP {change}</div>
                    </div> :
                    <div className="flex mb-3 text-lg font-semibold bg-pink-100 text-blue-gray-700 rounded-lg py-2 px-3">
                        <div className="text-right flex-grow text-pink-600">PHP {change}</div>
                    </div>
            )
        }
        <button onClick={() => {
            onSubmit(cash);
        }} className="text-white rounded-2xl text-lg w-full py-3 focus:outline-none bg-orange-500 hover:bg-orange-600">
            SUBMIT
        </button>
    </div>;
};

export default Checkout;