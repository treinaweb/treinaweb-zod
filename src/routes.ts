import express from "express";
import { type Request, type Response } from "express";
import { User } from "./model/user";
import { UserService } from "./service/user-service";
import { User2 } from "./model/User2";

const router = express.Router();
const userService = new UserService();

router.post("/", async (req: Request, res: Response) => {
  const userInput: User = req.body as User2;
  const savedUser = await userService.createUser(userInput);
  res.status(201).json(savedUser);
});

export default router;