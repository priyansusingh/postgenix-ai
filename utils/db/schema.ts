import {integer, varchar, pgTable, serial, text, timestamp, boolean, point} from 'drizzle-orm/pg-core'

export const Users = pgTable('users',{
  id: serial('id').primaryKey(),
  stripeCustomerId: text('stripe_customer_id').unique(),
  email: text('email').notNull().unique(),
  name: text('name'),
  points: integer('points').default(50),
  createdAt: timestamp('created_at').defaultNow()
})