import React, { useState, useEffect } from 'react';
import logo from '../assets/receipt-logo.png';

const Receipt = ({ items, cash, onProceed, onClose } : any) => {

    const total = items.reduce((accumulator: number, item: any) => accumulator + (+item.product.price * +item.quantity), 0);
    const receiptNo = 'TWPOS-KS-1674703600';
    const date = new Date();

    return <div className="fixed w-full h-screen left-0 top-0 z-10 flex flex-wrap justify-center content-center p-24">
    <div className="fixed glass w-full h-screen left-0 top-0 z-0" onClick={onClose}></div>
    <div className="w-96 rounded-3xl bg-white shadow-xl overflow-hidden z-10">
      <div id="receipt-content" className="text-left w-full text-sm p-6 overflow-auto">
        <div className="text-center">
          <img src={logo} alt="Tailwind POS" className="mb-3 w-8 h-8 inline-block"/>
          <h2 className="text-xl font-semibold">TAILWIND POS</h2>
          <p>STORE ADDRESS</p>
        </div>
        <div className="flex mt-4 text-xs">
          <div className="flex-grow">No: <span>{receiptNo}</span></div>
          <div>{date.toDateString()}</div>
        </div>
        <hr className="my-2"/>
        <div>
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="py-1 w-1/12 text-center">#</th>
                <th className="py-1 text-left">Item</th>
                <th className="py-1 w-2/12 text-center">Qty</th>
                <th className="py-1 w-3/12 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
                {items.map((item: any, index: number) => (<tr>
                  <td className="py-2 text-center" x-text="index+1">{index + 1}</td>
                  <td className="py-2 text-left">
                    <span>{item.product.name}</span>
                    <br/>
                    <small>PHP {item.product.price}</small>
                  </td>
                  <td className="py-2 text-center">{item.quantity}</td>
                  <td className="py-2 text-right">PHP {item.product.price * item.quantity}</td>
                </tr>))}
              </tbody>
          </table>
        </div>
        <hr className="my-2"/>
        <div>
          <div className="flex font-semibold">
            <div className="flex-grow">TOTAL</div>
            <div>PHP {total}</div>
          </div>
          <div className="flex text-xs font-semibold">
            <div className="flex-grow">PAY AMOUNT</div>
            <div>PHP {cash}</div>
          </div>
          <hr className="my-2"/>
          <div className="flex text-xs font-semibold">
            <div className="flex-grow">CHANGE</div>
            <div>{cash - total}</div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full">
        <button onClick={() => { onProceed(); }} className="bg-cyan-500 text-white text-lg px-4 py-3 rounded-2xl w-full focus:outline-none">PROCEED</button>
      </div>
    </div>
  </div>;
};

export default Receipt;