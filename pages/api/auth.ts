import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const secret = process.env.JWT_SECRET;

const signUp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'User creation failed' });
  }
};

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

const logout = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Logged out successfully' });
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      if (req.url === '/api/auth/signup') {
        return signUp(req, res);
      } else if (req.url === '/api/auth/login') {
        return login(req, res);
      } else if (req.url === '/api/auth/logout') {
        return logout(req, res);
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
