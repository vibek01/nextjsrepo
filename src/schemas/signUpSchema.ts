import { string, z } from 'zod';

export const usernameValidation = z
    .string()
    .min(2, 'username must be atlesat 2 characters')
    .max(12, 'username must be atlesat 12 characters')
    

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'invalid email address'}),
    password: z.string().min(3, {message: 'passwrod must be atlesat 3 characters'}).max(12)
})