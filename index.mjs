import { MailtrapClient } from "mailtrap";

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = "c94f6ad56291db20d98656933aeb8e82";
const SENDER_EMAIL = "hello@demomailtrap.com";
const RECIPIENT_EMAIL = "priyansusingh378@gmail.com";

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN environment variable is not set");
}

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "PostgeniX", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from PostgeniX!",
    text: "Welcome to PostgeniX",
  })
  .then(console.log)
  .catch(console.error);