import { CardElement } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import OrderDetails from './OrderDetails';
import Button from './Home/Button';
const CheckoutForm = (order: { order: { id: any; }; }) => {
    const id=order?.order?.id;


    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
const price=100

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/course/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [id])
    const handleSubmit=async (event:any) =>{
       
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        // name: userName,
                        // email: email
                    },
                },
            },
        );

        if (intentError) {
            //@ts-ignore
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            
            setSuccess('Congrats! Your payment is completed.')
            
            const payment = {
                transactionId: paymentIntent.id,
                courseId:id,
                //@ts-ignore
                userId:JSON.parse(localStorage.getItem('user'))?.id

            }
            fetch(`${process.env.NEXT_PUBLIC_URL}/api/course/createOrder`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data => {
                setProcessing(false);
                console.log(data);
            })

        }
    

    }
    return (
        <div className='flex justify-between'>
            
           <form onSubmit={handleSubmit} className='w-1/2'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
           
                <button className=' h-12 flex flex-row justify-center items-center px-6 py-2.5  my-10 w-[210px] rounded-md bg-[#020617] text-white' type="submit" >
                    Pay
                </button>
            </form>
            <div>
                <OrderDetails price={100} discount={100} tax={10} total={500}/>
                <Button label='Proceed To Checkout' classNames='w-[352px] h-12 flex flex-row justify-center items-center px-6 py-2.5 my-4 rounded-md bg-[#020617] text-white' />
                </div>   
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                   
                </div>
            }
        </div>
    );
};

export default CheckoutForm;