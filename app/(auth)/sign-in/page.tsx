import AuthForm from "@/components/AuthForm";

import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const SignIn = () => <AuthForm type="sign-in" />;

export default SignIn;
