import { PrismaClient } from "@prisma/client";
import { User } from "../generated/prisma";
import { GenericRepository } from "../utils/generic";

const prisma = new PrismaClient();
const userRepo = new GenericRepository<User>(prisma.user);

export const createUser = async (data: Omit<User, 'id'>) => {
    return await userRepo.create(data);
};

export const getAllUsers = async () => {
    return await userRepo.findAll();
  };
  
  export const getUserById = async (id: string) => {
    return await userRepo.findById(id);
  };
  
  export const updateUser = async (id: string, data: Partial<User>) => {
    return await userRepo.update(id, data);
  };
  
  export const deleteUser = async (id: string) => {
    return await userRepo.delete(id);
  };