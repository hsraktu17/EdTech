import { z } from 'zod'

export const userSchema = z.object({
    firstname : z.string().min(1),
    lastname : z.string().min(1),
    email : z.string().email(),
    password : z.string().min(6),
})