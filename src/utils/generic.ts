import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class GenericRepository<T extends { id: string }> {
  constructor(private readonly model: any) {}

  async create(data: Omit<T, 'id'>) {
    return this.model.create({ data });
  }

  async findAll(): Promise<T[]> {
    return this.model.findMany();
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<T>) {
    return this.model.update({ where: { id }, data });
  }

  async delete(id: string): Promise<T> {
    return this.model.delete({ where: { id } });
  }
}
