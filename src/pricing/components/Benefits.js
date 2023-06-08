import React from 'react';

const Benefits = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Unlimited Access</h2>
            <p className="text-gray-700">
              With our subscription plans, you get unlimited access to all our courses.
              Learn at your own pace and revisit any course whenever you want.
            </p>
          </div>
          
          
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Exclusive Content</h2>
            <p className="text-gray-700">
              Subscribers get access to exclusive content, including bonus lessons,
              downloadable resources, and extra materials not available to free users.
            </p>
          </div>
          
          
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Priority Support</h2>
            <p className="text-gray-700">
              As a subscriber, you receive priority support from our team.
              Get your questions answered and receive guidance to help you succeed
              in your learning journey.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Cancel Anytime</h2>
            <p className="text-gray-700">
            You can cancel your subscription anytime without any hassle.
            If you purchase a plan with a free trial, you won't be charged
            if you unsubscribe during that trial period.
            </p>
          </div>
          
          {/* Add more benefits here */}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
