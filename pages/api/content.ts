import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createContent = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, type, url, text, userId } = req.body;

  try {
    const content = await prisma.content.create({
      data: {
        title,
        type,
        url,
        text,
        userId,
      },
    });

    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ error: 'Content creation failed' });
  }
};

const updateContent = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, title, type, url, text } = req.body;

  try {
    const content = await prisma.content.update({
      where: { id },
      data: {
        title,
        type,
        url,
        text,
      },
    });

    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: 'Content update failed' });
  }
};

const deleteContent = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;

  try {
    await prisma.content.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Content deletion failed' });
  }
};

const fetchContentByUserPreferences = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, preferences } = req.body;

  try {
    const content = await prisma.content.findMany({
      where: {
        userId,
        type: { in: preferences },
      },
    });

    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: 'Fetching content by user preferences failed' });
  }
};

const fetchTrendingContent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const content = await prisma.content.findMany({
      orderBy: {
        likes: 'desc',
      },
      take: 10,
    });

    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: 'Fetching trending content failed' });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      if (req.url === '/api/content/create') {
        return createContent(req, res);
      } else if (req.url === '/api/content/update') {
        return updateContent(req, res);
      } else if (req.url === '/api/content/delete') {
        return deleteContent(req, res);
      } else if (req.url === '/api/content/fetchByUserPreferences') {
        return fetchContentByUserPreferences(req, res);
      } else if (req.url === '/api/content/fetchTrending') {
        return fetchTrendingContent(req, res);
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
