import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { SITE_URL } from 'src/core/utils';

export default function Plans({ plan, num }) {
  const planName = ['for 1 month', 'for 1 year', 'for 3 months'];

  async function onCheckout() {
    const response = await fetch(`${SITE_URL}/api/checkout/${plan.id}`);
    const data = await response.json();
    console.log(data);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    await stripe.redirectToCheckout({ sessionId: data.id });
  }

  useEffect(() => {
    // Make sure NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is defined
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      console.error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined');
    }
  }, []);

  return (
    <div className="bg-salmon border-right">
      <div className="column-padding centered">
        <div className="callout-wrap">
          <div className="plan">
            <div className="plan-wrap">
              <div className="plan-content">
                <h2 className="plan-name">{plan.name}</h2>
                <div className="">Just {plan.price} {planName[num]}</div>
                <div>
                  <button onClick={onCheckout} className="large-button">
                    <div className="large-button-text">Subscribe Now</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
