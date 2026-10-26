import { Link } from "react-router-dom";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Login() {
  return (
    <div className="login-container w-full max-w-md px-6">
      <div className="login-title mb-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Log in to your account to continue
        </p>
      </div>
      <div className="login-form">
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@gmail.com"
                autoComplete="email"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                autoComplete="current-password"
                required
              />
            </Field>
            <Field>
              <Button type="submit" className="w-full">
                Log in
              </Button>
              <FieldDescription className="text-center">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}

export default Login;
