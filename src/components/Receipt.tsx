import React, { useState, useEffect } from 'react';
import logo from '../assets/receipt-logo.png';

const Receipt = ({ items, cash, onProceed, onClose } : any) => {
    return <div x-show="isShowModalReceipt" className="fixed w-full h-screen left-0 top-0 z-10 flex flex-wrap justify-center content-center p-24">
    <div x-show="isShowModalReceipt" className="fixed glass w-full h-screen left-0 top-0 z-0" onClick={onClose} x-transition:enter="transition ease-out duration-100" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-100" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"></div>
    <div x-show="isShowModalReceipt" className="w-96 rounded-3xl bg-white shadow-xl overflow-hidden z-10" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100" x-transition:leave="transition ease-in duration-100" x-transition:leave-start="opacity-100 transform scale-100" x-transition:leave-end="opacity-0 transform scale-90">
      <div id="receipt-content" className="text-left w-full text-sm p-6 overflow-auto">
        <div className="text-center">
          <img src={logo} alt="Tailwind POS" className="mb-3 w-8 h-8 inline-block"/>
          <h2 className="text-xl font-semibold">TAILWIND POS</h2>
          <p>CABANG KONOHA SELATAN</p>
        </div>
        <div className="flex mt-4 text-xs">
          <div className="flex-grow">No: <span x-text="receiptNo">TWPOS-KS-1674703600</span></div>
          <div x-text="receiptDate">26/01/23 11.26</div>
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
                <tr>
                  <td className="py-2 text-center" x-text="index+1">1</td>
                  <td className="py-2 text-left">
                    <span x-text="item.name">Iced Matcha Latte</span>
                    <br/>
                    <small x-text="priceFormat(item.price)">Rp. 22.000</small>
                  </td>
                  <td className="py-2 text-center" x-text="item.qty">1</td>
                  <td className="py-2 text-right" x-text="priceFormat(item.qty * item.price)">Rp. 22.000</td>
                </tr>
              
                <tr>
                  <td className="py-2 text-center" x-text="index+1">2</td>
                  <td className="py-2 text-left">
                    <span x-text="item.name">Red Glazed Donut</span>
                    <br/>
                    <small x-text="priceFormat(item.price)">Rp. 10.000</small>
                  </td>
                  <td className="py-2 text-center" x-text="item.qty">1</td>
                  <td className="py-2 text-right" x-text="priceFormat(item.qty * item.price)">Rp. 10.000</td>
                </tr>
              
                <tr>
                  <td className="py-2 text-center" x-text="index+1">3</td>
                  <td className="py-2 text-left">
                    <span x-text="item.name">Croissant</span>
                    <br/>
                    <small x-text="priceFormat(item.price)">Rp. 16.000</small>
                  </td>
                  <td className="py-2 text-center" x-text="item.qty">1</td>
                  <td className="py-2 text-right" x-text="priceFormat(item.qty * item.price)">Rp. 16.000</td>
                </tr>
              
                <tr>
                  <td className="py-2 text-center" x-text="index+1">4</td>
                  <td className="py-2 text-left">
                    <span x-text="item.name">Sawarma</span>
                    <br/>
                    <small x-text="priceFormat(item.price)">Rp. 30.000</small>
                  </td>
                  <td className="py-2 text-center" x-text="item.qty">1</td>
                  <td className="py-2 text-right" x-text="priceFormat(item.qty * item.price)">Rp. 30.000</td>
                </tr>
              
                <tr>
                  <td className="py-2 text-center" x-text="index+1">5</td>
                  <td className="py-2 text-left">
                    <span x-text="item.name">Choco Glazed Donut</span>
                    <br/>
                    <small x-text="priceFormat(item.price)">Rp. 10.000</small>
                  </td>
                  <td className="py-2 text-center" x-text="item.qty">14</td>
                  <td className="py-2 text-right" x-text="priceFormat(item.qty * item.price)">Rp. 140.000</td>
                </tr>
              </tbody>
          </table>
        </div>
        <hr className="my-2"/>
        <div>
          <div className="flex font-semibold">
            <div className="flex-grow">TOTAL</div>
            <div x-text="priceFormat(getTotalPrice())">Rp. 218.000</div>
          </div>
          <div className="flex text-xs font-semibold">
            <div className="flex-grow">PAY AMOUNT</div>
            <div x-text="priceFormat(cash)">Rp. 400.000</div>
          </div>
          <hr className="my-2"/>
          <div className="flex text-xs font-semibold">
            <div className="flex-grow">CHANGE</div>
            <div x-text="priceFormat(change)">Rp. 182.000</div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full">
        <button className="bg-cyan-500 text-white text-lg px-4 py-3 rounded-2xl w-full focus:outline-none" x-on:click="printAndProceed()">PROCEED</button>
      </div>
    </div>
  </div>;
};

export default Receipt;