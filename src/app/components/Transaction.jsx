"use client";

import TonConnect from '@tonconnect/sdk';
import Link from 'next/link';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css"

const tonConnect = new TonConnect()

const Transaction = () => {
    const navigate = useNavigate()

    const [amount, setAmount] = useState('')
    const [recipient, setRecipient] = useState('')
    
    const handleTransaction = async () => {
        try {
            toast.success(`Отправка ${amount} TON на адрес ${recipient}`);
        } catch (error) {
            toast.error('Ошибка транзакции:', error);
            toast.error('Ошибка при обработке транзакции');
        }
    }
    
    const checkInputs = () => {
        if (amount === '' || recipient === '' ) {
            toast.error('Ошибка при работе транзакции!')
            
        } else {
            toast.success('Транзакция успешно обработана')
        }
    }

    const handleBack = () => {
        navigate('/')
    } 
    
    return (
        <div className='transaction-screen'>
            <ToastContainer/>
        <header>
            <button onClick={handleBack}>Назад</button>

            <button onClick={checkInputs}>Создать транзакцию</button>
        </header>

    <main>
        <input 
            type="text"
            placeholder='Количество TON'
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            />

        <input 
            type="text"
            placeholder='Адрес получателя'
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)} 
            />
            <button onClick={handleTransaction}>Отправить</button>
    </main>
    </div>
    );
};

export default Transaction;