import { z } from 'zod';

export const UserSchema = z.object({
  email: z.string(),
  name: z.string(),
  surname: z.string(),
  favorites: z.array(z.string().nullable()),
});

export type User = z.infer<typeof UserSchema>;

export const SignUpSchema = z
  .object({
    email: z.string().email(),
    name: z.string().nonempty(),
    surname: z.string().nonempty(),
    password: z.string().nonempty(),
    confirmPassword: z.string().nonempty(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
      });
    }
  });

export type SignUpType = z.infer<typeof SignUpSchema>;

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty(),
});

export type LoginType = z.infer<typeof LoginSchema>;
