import { Link } from "react-router-dom";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Registration() {
  return (
    <div className="login-container w-full max-w-md px-6">
      <div className="login-title mb-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter your details below to get started
        </p>
      </div>
      <div className="login-form">
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="full-name">Full name</FieldLabel>
              <Input
                id="full-name"
                name="fullName"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                required
              />
            </Field>
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
                autoComplete="new-password"
                required
              />
              <FieldDescription>Use at least 8 characters.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm password
              </FieldLabel>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                placeholder="********"
                autoComplete="new-password"
                required
              />
            </Field>
            <Field>
              <Button type="submit" className="w-full">
                Create account
              </Button>
              <FieldDescription className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Log in
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}

export default Registration;
