import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Form, Input, Button, Typography, Alert, Switch, Divider } from "antd";
import Checkoutbg from "../cartcomponents/Checkoutbg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const { Title } = Typography;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { state } = useLocation();
  const cartItems = state?.cartItems || [];
  const totalQuantity = state?.totalQuantity || 0;
  const grandTotal = state?.grandTotal || 0;

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [cardError, setCardError] = useState(null);
  const [saveInfo, setSaveInfo] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculatedSubtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, [cartItems]);

  const onFinish = async (values) => {
    if (!stripe || !elements) return;

    setLoading(true);
    setCardError(null);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: {
          line1: values.address,
          city: values.city,
          postal_code: values.zip,
        },
      },
    });

    if (error) {
      setCardError(error.message);
      setLoading(false);
    } else {
      console.log("✅ PaymentMethod created:", paymentMethod);
      console.log("📦 Delivery Info:", values);
      console.log("🛒 Cart Items:", cartItems);
      console.log("💾 Save Info:", saveInfo);
      setSuccess(true);
      setLoading(false);
      navigate("/order-confirmation"); // Redirect to order confirmation page
    }
  };

  const total = subtotal + 5; // Delivery fee is hardcoded here

  return (
    <div>
      <Checkoutbg />
      <div className="bg-customBlack px-4 min-h-screen font-merienda p lg:py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto text-white">
          {/* Checkout Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-2xl font-merienda">
            {success ? (
              <Alert
                message="Payment Successful 🎉"
                type="success"
                showIcon
                className="mb-4"
              />
            ) : (
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                scrollToFirstError
                className="font-merienda"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your full name" }]}
                  >
                    <Input placeholder="John Doe" size="large" />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Invalid email format" },
                    ]}
                  >
                    <Input placeholder="john@example.com" size="large" />
                  </Form.Item>
                </div>

                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    { required: true, message: "Phone number is required" },
                    { pattern: /^\d{10,}$/, message: "Phone number must be at least 10 digits" },
                  ]}
                >
                  <Input placeholder="1234567890" size="large" />
                </Form.Item>

                <Form.Item
                  label="Street Address"
                  name="address"
                  rules={[{ required: true, message: "Please enter your address" }]}
                >
                  <Input placeholder="123 Main St" size="large" />
                </Form.Item>

                <div className="grid md:grid-cols-2 gap-4">
                  <Form.Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: "City is required" }]}
                  >
                    <Input size="large" />
                  </Form.Item>

                  <Form.Item
                    label="ZIP Code"
                    name="zip"
                    rules={[{ required: true, message: "ZIP code is required" }]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>

                <Form.Item
                  label="Delivery Instructions (optional)"
                  name="instructions"
                >
                  <Input.TextArea rows={3} placeholder="Leave at the door..." />
                </Form.Item>

                <Form.Item label="Card Details" required>
                  <div className="p-3 border border-gray-300 rounded-md bg-white">
                    <CardElement
                      onChange={(e) => {
                        setCardError(e.error ? e.error.message : null);
                      }}
                    />
                  </div>
                  {cardError && (
                    <div className="text-red-500 mt-2 text-sm">{cardError}</div>
                  )}
                </Form.Item>

                <Form.Item className="flex items-center gap-3">
                  <Switch
                    checked={saveInfo}
                    onChange={() => setSaveInfo(!saveInfo)}
                    className="!bg-customColor scroll-smooth"
                  />
                  <span className="text-black !font-merienda !text-sm ml-2">Save this info for next time</span>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    disabled={!stripe}
                    className="w-full !h-12 text-sm font-extrabold !font-merienda bg-customColor hover:!bg-customColor rounded-full border-none hover:opacity-90"
                  >
                    {loading ? "Processing..." : "Pay Now"}
                  </Button>
                </Form.Item>
              </Form>
            )}
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 shadow-2xl text-white h-fit">
            <Title level={3} className="!text-white mb-6 font-merienda">
              Order Summary
            </Title>

            {/* Ensure the cartItems is being mapped correctly */}
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 mb-4">
                  {/* Ensure each item has an image and other details */}
                  <img
                    src={item.image || "default-image.jpg"} // Add fallback if image is missing
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-base font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-400">
                      {item.quantity}x ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="my-2 text-red-600">No items in your cart.</p>
            )}

            {/* Item subtotal */}
            <div className="flex justify-between mb-2">
              <span>Item Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* Delivery Fee */}
            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>$5.00</span>
            </div>

            {/* Total */}
            <Divider className="bg-white opacity-20" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
