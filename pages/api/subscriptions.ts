import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, creatorId, tierId } = req.body;

  try {
    const subscription = await prisma.subscription.create({
      data: {
        userId,
        creatorId,
        tierId,
      },
    });

    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ error: 'Subscription creation failed' });
  }
};

const manageSubscriptionTiers = async (req: NextApiRequest, res: NextApiResponse) => {
  const { creatorId, tiers } = req.body;

  try {
    const updatedTiers = await prisma.subscriptionTier.updateMany({
      where: { creatorId },
      data: tiers,
    });

    res.status(200).json(updatedTiers);
  } catch (error) {
    res.status(500).json({ error: 'Managing subscription tiers failed' });
  }
};

const handlePayment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, creatorId, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: { userId, creatorId },
    });

    res.status(201).json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: 'Payment handling failed' });
  }
};

const fetchSubscriptionDetails = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.query;

  try {
    const subscriptions = await prisma.subscription.findMany({
      where: { userId: Number(userId) },
    });

    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: 'Fetching subscription details failed' });
  }
};

const fetchEarningsReports = async (req: NextApiRequest, res: NextApiResponse) => {
  const { creatorId } = req.query;

  try {
    const earnings = await prisma.earnings.findMany({
      where: { creatorId: Number(creatorId) },
    });

    res.status(200).json(earnings);
  } catch (error) {
    res.status(500).json({ error: 'Fetching earnings reports failed' });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      if (req.url === '/api/subscriptions/subscribe') {
        return subscribe(req, res);
      } else if (req.url === '/api/subscriptions/manageTiers') {
        return manageSubscriptionTiers(req, res);
      } else if (req.url === '/api/subscriptions/handlePayment') {
        return handlePayment(req, res);
      }
      break;
    case 'GET':
      if (req.url === '/api/subscriptions/details') {
        return fetchSubscriptionDetails(req, res);
      } else if (req.url === '/api/subscriptions/earnings') {
        return fetchEarningsReports(req, res);
      }
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
