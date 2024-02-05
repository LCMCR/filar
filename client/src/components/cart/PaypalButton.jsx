import { PayPalButtons } from "@paypal/react-paypal-js";
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { emptyCart } from "../../redux/filarSlice";
import { useNavigate } from 'react-router-dom';

const PaypalButton = ({ description, total }) => {

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleApprove = (orderId) => {
    try {
      setPaidFor(true);
      dispatch(emptyCart());
      toast.success("Thank you for purchasing at Filar");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Error in processing payment");
      console.error("Error", error);
    }
  }, [error]);

  return (
        <div>
          <PayPalButtons 
            style={{ color: "silver"}}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: description,
                    amount: {
                      value: total,
                      currency_code: 'USD',
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              try {
                const order = await actions.order.capture();
                console.log("order", order);
                handleApprove(data.orderID);
              } catch (error) {
                console.error("Error capturing order: ", error);
              }
            }}

            onCancel = {() => {}}

            onError = {(error) => {
                setError(error);
                console.error("Error", error);
            }}
          />
          <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
          />
        </div>
  );
};

PaypalButton.propTypes = {
    total: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    };

export default PaypalButton;




