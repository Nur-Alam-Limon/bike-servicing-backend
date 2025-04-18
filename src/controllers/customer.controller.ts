import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;
    const customer = await prisma.customer.create({
      data: { name, email, phone },
    });
    res.status(201).json({
      success: true,
      message: 'Customer created successfully',
      data: customer,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllCustomers = async (_req: Request, res: Response) => {
  const customers = await prisma.customer.findMany();
  res.json({
    success: true,
    message: 'Customers fetched successfully',
    data: customers,
  });
};

export const getCustomerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = await prisma.customer.findUnique({ where: { customerId: id } });
  if (!customer) {
    res.status(404).json({ success: false, message: 'Customer not found' });
  }
  res.json({ success: true, message: 'Customer fetched successfully', data: customer });
};

export const updateCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = await prisma.customer.update({
    where: { customerId: id },
    data: req.body,
  });
  res.json({
    success: true,
    message: 'Customer updated successfully',
    data: customer,
  });
};

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.customer.delete({ where: { customerId: id } });
  res.json({ success: true, message: 'Customer deleted successfully' });
};
