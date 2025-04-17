import { Request, Response } from "express";
import * as UserService from "../services/user.service";

export const create = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "User creation failed" });
  }
};

export const getAll = async (_req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  res.json(users);
};

export const getOne = async (req: Request, res: Response) => {
  const user = await UserService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

export const update = async (req: Request, res: Response) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "User update failed" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "User deletion failed" });
  }
};
