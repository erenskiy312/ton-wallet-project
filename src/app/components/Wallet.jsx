"use client";

import React, { useEffect, useState } from 'react';
import TonConnect from '@tonconnect/sdk';
import "./style.css"
import { useNavigate } from 'react-router-dom';

const tonConnect = new TonConnect()

export default function Wallet () {

    const navigate = useNavigate()

    const [wallet, setWallet] = useState(null)
    const [balance, setBalance] = useState(null)

    useEffect(() => {
        if (wallet) {
            setBalance(wallet.balance)
        }
    }, [wallet])

    const connectWallet = async () => {
        try {
            const walletinfo = await tonConnect.getWallets()
            setWallet(walletinfo);
            setBalance(walletinfo.balance)
        } catch (error) {
            console.log('Ошибка подключения кошелька', error);
        }
    }


    return (
        <div className='wallet-screen'>
            <header>
            <h1>Ваш кошелек</h1>
            {!wallet ? (
                <button onClick={connectWallet}>Привязать кошелек</button>
                ) : (
                    <div>
                    <p>Баланс: {balance}</p>
                    <p>Адрес: {wallet.address}</p>
                </div>
            )
            
        }
        </header>

        <main>
            {wallet && (
                    <button onClick={navigate('/transaction')}>Перейти к транзакции</button>
            )}
        </main>
        </div>
    );
};
