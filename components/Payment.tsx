'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

import CheckoutForm from './CheckoutForm';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
const stripePromise = loadStripe('pk_test_51L2a8yGIi5IetcrLOT8S6J6l3hU0Ioh3W25tLjgwVIYXimdTZ9V7JxjgUtVSJ7OF9D76LBvqZccilfYPTWN6IeyI003s7XUspm');


const Payment = () => {
    const router = useRouter();

    const searchParam=useSearchParams();
    async function getCourse(){
        const courseId=searchParam.get("id")

  
       const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/course/${courseId}`);
     const users = (await res.data) ;
     return users;
     }
   
       const { data } = useQuery({
       queryKey: ['courseDetail'],
       queryFn: () => getCourse(),
   
       staleTime: 5 * 1000,
     });    // const url = `${process.env.REACT_APP_URL}/api/products/order/${id}`;

    // const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));

  
    return (
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                {/* <p className="text-success font-bold">Greeting {order.userName}</p> */}
                <h2 class="card-title"> Pay for {data?.name}</h2>
           
                <p>Please pay: ${data?.price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={data} />
                </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;