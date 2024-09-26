import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriptionManager = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [tiers, setTiers] = useState([]);
  const [selectedTier, setSelectedTier] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    fetchSubscriptions();
    fetchTiers();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      const response = await axios.get('/api/subscriptions/details');
      setSubscriptions(response.data);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    }
  };

  const fetchTiers = async () => {
    try {
      const response = await axios.get('/api/subscriptions/tiers');
      setTiers(response.data);
    } catch (error) {
      console.error('Error fetching tiers:', error);
    }
  };

  const handleRenewSubscription = async (subscriptionId) => {
    try {
      const response = await axios.post('/api/subscriptions/renew', { subscriptionId });
      setPaymentStatus('Subscription renewed successfully');
    } catch (error) {
      console.error('Error renewing subscription:', error);
      setPaymentStatus('Error renewing subscription');
    }
  };

  const handleCancelSubscription = async (subscriptionId) => {
    try {
      const response = await axios.post('/api/subscriptions/cancel', { subscriptionId });
      setPaymentStatus('Subscription canceled successfully');
    } catch (error) {
      console.error('Error canceling subscription:', error);
      setPaymentStatus('Error canceling subscription');
    }
  };

  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/subscriptions/handlePayment', { tierId: selectedTier.id });
      setPaymentStatus('Payment successful');
    } catch (error) {
      console.error('Error handling payment:', error);
      setPaymentStatus('Error handling payment');
    }
  };

  return (
    <div>
      <h2>Subscription Manager</h2>
      <div>
        <h3>Active Subscriptions</h3>
        <ul>
          {subscriptions.map((subscription) => (
            <li key={subscription.id}>
              {subscription.creatorName} - {subscription.tierName}
              <button onClick={() => handleRenewSubscription(subscription.id)}>Renew</button>
              <button onClick={() => handleCancelSubscription(subscription.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Subscription Tiers</h3>
        <ul>
          {tiers.map((tier) => (
            <li key={tier.id} onClick={() => handleSelectTier(tier)}>
              {tier.name} - ${tier.price}
            </li>
          ))}
        </ul>
        {selectedTier && (
          <div>
            <h4>Selected Tier: {selectedTier.name}</h4>
            <button onClick={handlePayment}>Subscribe</button>
          </div>
        )}
      </div>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default SubscriptionManager;
