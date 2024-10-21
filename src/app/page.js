'use client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transaction from "./components/Transaction";
import Wallet from "./components/Wallet";
export default function Home() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Wallet/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
    </Routes>
   </div>
  );
}
