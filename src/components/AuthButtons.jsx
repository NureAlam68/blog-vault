import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function AuthButtons() {
  return (
    <div className="flex gap-4">
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
