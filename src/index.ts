import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { ResendRepo } from './resend'

const app = new Hono()
app.use('/*', cors())
app.post('/api/contact/submit', async (c) => {
  const body = JSON.parse(await c.req.text())
  console.log(body);
  const resendRepo = new ResendRepo(c.env?.RESEND_API_KEY as string)
  await resendRepo.sendContactEmail(body.name, body.email, body.message)
  return c.json({ message: 'Submitted Sucessfully' }, 200)
})


export default app