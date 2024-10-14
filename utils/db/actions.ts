import {db} from './dbCongig'
import {eq, sql, desc} from 'drizzle-orm'
import {Users, Subscriptions, GeneratedContent} from './schema' 
import { sendWelcomeEmail } from '../mailtrap';

export async function createOrUpdateUser(
    clerkUserId: string,
    name: string,
    email: string
) {
   try {
        const [existingUser] = await db
        .select()
        .from(Users)
        .where(eq(Users.stripeCustomerId, clerkUserId))
        .limit(1)
        .execute() 
    
    if(existingUser){
        const [updatedUser] = await db
        .update(Users)
        .set({name, email})
        .where(eq(Users.stripeCustomerId, clerkUserId))
        .returning()
        .execute();

        console.log('Updated User: ', updatedUser);
        return updatedUser;
    }
    const [newUser] = await db.insert(Users).values({email, name, stripeCustomerId:clerkUserId, points:50})
    .returning()
    .execute()
    console.log('new user: ', newUser);
    //send welcome email to new users
    await sendWelcomeEmail(email, name)
    } catch (error) {
        console.error("Error creating or Updating the user", error);
        return null;
    }
}