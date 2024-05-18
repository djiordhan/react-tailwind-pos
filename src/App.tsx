import { useState } from 'react';
import burger from './assets/beef-burger.png';
import './App.css';
import ProductMenu from './components/ProductMenu';
import ProductSearch from './components/ProductSearch';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import button from './assets/button-21.mp3';
import Receipt from './components/Receipt';

function App() {
  const initItems: any[] = [];
  const [searchKey, setSearchKey] = useState('');
  const [cartItems, setCartItems] = useState(initItems);
  const [showReceipt, setShowReceipt] = useState(false);
  const [cash, setCash] = useState(0);

  return (
    <>
      <div className="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
        <div className="flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4">
          <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-orange-500 rounded-3xl">
          </div>
        </div>
        <div className="flex-grow flex">
          <div className="flex flex-col bg-blue-gray-50 h-full w-full py-4">
            <ProductSearch onSearch={(searchKey: string) => {
              setSearchKey(searchKey);
            }} />
            <div className="h-full overflow-hidden mt-4">
              <ProductMenu searchKey={searchKey} onSelect={(product: any) => {
                let found = false;
                for (var i = 0; i < cartItems.length; i++) {
                  if (cartItems[i].product.name === product.name) {
                    cartItems[i].quantity = cartItems[i].quantity + 1;
                    found = true;
                  }
                }

                if (!found) {
                  cartItems.push({ product, quantity: 1 });
                }

                setCartItems([...cartItems]);
              }} />
            </div>
          </div>
          <div className="w-5/12 flex flex-col bg-blue-gray-50 h-full bg-white pr-4 pl-2 py-4">
            <div className="bg-white rounded-3xl flex flex-col h-full shadow">
              <div className="flex-1 flex flex-col overflow-auto">
                <div className="h-16 text-center flex justify-center">
                  {
                    cartItems.length !== 0 &&
                    <>
                      <div className="pl-8 text-left text-lg py-4 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <div className="text-center absolute bg-orange-500 text-white w-5 h-5 text-xs p-0 leading-5 rounded-full -right-2 top-3">
                          {
                            cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
                          }
                        </div>
                      </div>
                      <div className="flex-grow px-8 text-right text-lg py-4 relative">
                        <button onClick={() => {
                          setCartItems([]);
                          const sound = new Audio();
                          sound.src = button;
                          sound.play();
                        }} className="text-blue-gray-300 hover:text-pink-500 focus:outline-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </>
                  }
                </div>
                <Cart items={cartItems} onCartUpdate={(newCartItems: any) => {
                  setCartItems(newCartItems);
                }} />
              </div>
              <Checkout items={cartItems} onSubmit={(cash: number) => {
                setCash(cash);
                setShowReceipt(true);
              }} />
            </div>
          </div>
        </div>
        {
          showReceipt &&
          <Receipt cash={cash} items={cartItems}
            onProceed={() => {
              const receiptContent: any = document.getElementById('receipt-content');
              const printArea: any = document.getElementById('print-area');
              printArea.innerHTML = receiptContent.innerHTML;
              window.print();
              printArea.innerHTML = '';
              setShowReceipt(false);


              setCartItems([]);
              const sound = new Audio();
              sound.src = button;
              sound.play();
            }}
            onClose={() => setShowReceipt(false)} 
            />
        }
      </div>
      <div id="print-area" className="print-area"></div>
    </>
  );
}

export default App;
