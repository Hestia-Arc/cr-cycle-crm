// import * as z from "zod";

// import { api } from "./api-client";

// const registerInputSchema = z.object({
//   firstname: z.string().min(1),
//   lastname: z.string().min(1),
//   email: z.email().min(1, "Required"),
//   password: z.string().min(8, "Required"),
//   passwordConfirmation: z.string().min(8, "Required"),
// });

// type RegisterInput = z.infer<typeof registerInputSchema>;

// const registerUser = (data: RegisterInput): Promise<""> => {
//   return api.post("/auth/register", data);
// };
