import Benefits from "src/pricing/components/Benefits";
import Plans from "src/pricing/components/Plans";
import { stripe } from "src/pricing/utils/stripe";


export default function PricingPage({ plans }) {
  let num = 0
    return (

      <div className="grid-halves h-screen-navbar">
      
        {plans.map((plan) => (
          <>
          <Plans key={plan.id} plan={plan} num ={num} />
         
          </>

        ))}
        <Benefits />
      </div>
    );
  }
  

export async function getStaticProps() {
    const {data: prices} = await stripe.prices.list({limit: 3})
    const plans = []
    for (const price of prices) {
        const product = await stripe.products.retrieve(price.product)
        plans.push({
            name: product.name,
            id:price.id,
            price: price.unit_amount/100,
            interval: price.recurring.interval
        })
    }

    return {
        props: {
            plans
        }

    }

}
