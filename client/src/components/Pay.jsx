import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51Nnk1aH81bhXcDamzUIHyRPdHPSjyhRdFtZVEG9DeKnHM5KxHokUVsiioP5khbF3Bi688B3019OeW6gM6MxpPPQ600MGTAAp4O";

const Pay = () => {

    const onToken = (token) => {
        console.log(token);
    }

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
