import {z} from "zod"

export const PostValidator = z.object({
  title: z.string().min(3, {message: 'Title must be longerthan 3 chacracters'})
  .max(128, {message: 'Title must be at least 128 characters'}),
  subredditId: z.string(),
  content: z.any(),
})

export  type PostCreationRequest  = z.infer<typeof PostValidator>