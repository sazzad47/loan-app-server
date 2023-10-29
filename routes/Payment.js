const router = require("express").Router();

// GET STRIPE PUBLISHABLE KEY
router.get('/config', (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
});

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
    appInfo: { // For sample support and debugging, not required for production:
      name: "stripe-samples/accept-a-payment/custom-payment-flow",
      version: "0.0.2",
      url: "https://github.com/stripe-samples"
    }
  });

router.post('/create-payment-intent', async (req, res) => {
    const {paymentMethodType, currency,paymentMethodOptions, amount} = req.body;
    
    const amountInCents = amount * 100;
    const params = {
      payment_method_types: paymentMethodType === 'link' ? ['link', 'card'] : [paymentMethodType],
      amount: amountInCents,
      currency: currency,
    }
  
   
    if (paymentMethodOptions) {
      params.payment_method_options = paymentMethodOptions
    }
  
    // Create a PaymentIntent with the amount, currency, and a payment method type.
    //
    // See the documentation [0] for the full list of supported parameters.
    //
    // [0] https://stripe.com/docs/api/payment_intents/create
    try {
      const paymentIntent = await stripe.paymentIntents.create(params);
  
      // Send publishable key and PaymentIntent details to client
      res.send({
        clientSecret: paymentIntent.client_secret,
        nextAction: paymentIntent.next_action,
      });
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
  });

module.exports = router;
