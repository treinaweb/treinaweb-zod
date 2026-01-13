import express from "express";
import { type Request, type Response } from "express";
import { User, UserSchema } from "./model/user";
import { UserService } from "./service/user-service";
import { User2 } from "./model/user2";
import z from "zod";

const router = express.Router();
const userService = new UserService();

router.post("/", async (req: Request, res: Response) => {
  const result = UserSchema.safeParse(req.body);
  if (!result.success) {
    const error = z.treeifyError(result.error);
    return res.status(400).json({errors: error})
  };

  const userInput: User = result.data;
  const savedUser = await userService.createUser(userInput);
  const output = UserSchema.encode(userInput);
  console.log(output.createdAt);

  console.log(userInput.createdAt);
  res.status(201).json(savedUser);
});

export default router;