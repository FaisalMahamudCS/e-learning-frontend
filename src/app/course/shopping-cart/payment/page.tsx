"use client"
import React from 'react';
import Payment from '../../../../../components/Payment';
import RequireAuth from '../../../../../components/RequireAuth';
import isAuth from '../../../../../components/RequireAuth';

const page = () => {
    return (
      
        <Payment/>

    );
};

export default isAuth(page)