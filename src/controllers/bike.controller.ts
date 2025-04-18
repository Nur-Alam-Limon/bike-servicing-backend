import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createBike = async (req: Request, res: Response) => {
  try {
    const { brand, model, year, customerId } = req.body;
    const bike = await prisma.bike.create({
      data: { brand, model, year, customerId },
    });
    res.status(201).json({ success: true, message: 'Bike created', data: bike });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllBikes = async (_req: Request, res: Response) => {
  const bikes = await prisma.bike.findMany();
  res.json({ success: true, message: 'Bikes fetched', data: bikes });
};

export const getBikeById = async (req: Request, res: Response) => {
  const bike = await prisma.bike.findUnique({ where: { bikeId: req.params.id } });
  bike
    ? res.json({ success: true, data: bike })
    : res.status(404).json({ success: false, message: 'Bike not found' });
};

export const updateBike = async (req: Request, res: Response) => {
  const bike = await prisma.bike.update({
    where: { bikeId: req.params.id },
    data: req.body,
  });
  res.json({ success: true, message: 'Bike updated', data: bike });
};

export const deleteBike = async (req: Request, res: Response) => {
  await prisma.bike.delete({ where: { bikeId: req.params.id } });
  res.json({ success: true, message: 'Bike deleted' });
};
