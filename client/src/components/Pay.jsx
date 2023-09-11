import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const KEY = "pk_test_51Nnk1aH81bhXcDamzUIHyRPdHPSjyhRdFtZVEG9DeKnHM5KxHokUVsiioP5khbF3Bi688B3019OeW6gM6MxpPPQ600MGTAAp4O";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const stripeRequest  = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment", {
                        tokenId: stripeToken.id,
                        amount: 2000,            //this is 20 not 2000 but should write it like this 
                    }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }    
        };
        stripeToken && stripeRequest();
    }, [stripeToken]);

    return (
        <div 
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
        <StripeCheckout
            name='Rom Shop'
            image='https://www.shutterstock.com/image-vector/logo-letter-rm-initial-illustration-600w-1731333316.jpg'
            billingAddress
            shippingAddress
            description=' Your total ys $20'
            amount={2000}
            token={onToken}
            stripeKey={KEY}
        >
            <button 
                style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor:"black" ,
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                }}
                >
                Pay Now
            </button>
        </StripeCheckout>
        </div>
    );
};

export default Pay
