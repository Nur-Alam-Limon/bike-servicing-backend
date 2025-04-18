import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createService = async (req: Request, res: Response) => {
  try {
    const { bikeId, serviceDate, description, status } = req.body;
    const service = await prisma.serviceRecord.create({
      data: { bikeId, serviceDate: new Date(serviceDate), description, status },
    });
    res.status(201).json({ success: true, message: 'Service created', data: service });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllServices = async (_req: Request, res: Response) => {
  const services = await prisma.serviceRecord.findMany();
  res.json({ success: true, message: 'Services fetched', data: services });
};

export const getServiceById = async (req: Request, res: Response) => {
  const service = await prisma.serviceRecord.findUnique({ where: { serviceId: req.params.id } });
  service
    ? res.json({ success: true, data: service })
    : res.status(404).json({ success: false, message: 'Service not found' });
};

export const completeService = async (req: Request, res: Response) => {
  const service = await prisma.serviceRecord.update({
    where: { serviceId: req.params.id },
    data: {
      status: 'completed',
      completionDate: new Date(),
    },
  });
  res.json({ success: true, message: 'Service completed', data: service });
};

export const deleteService = async (req: Request, res: Response) => {
  await prisma.serviceRecord.delete({ where: { serviceId: req.params.id } });
  res.json({ success: true, message: 'Service deleted' });
};

export const getPendingOrOverdueServices = async (_req: Request, res: Response) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const services = await prisma.serviceRecord.findMany({
      where: {
        status: { in: ['pending', 'in-progress'] },
        serviceDate: { lt: sevenDaysAgo },
      },
    });

    res.status(200).json({
      success: true,
      message: 'Overdue or pending services fetched successfully',
      data: services,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

