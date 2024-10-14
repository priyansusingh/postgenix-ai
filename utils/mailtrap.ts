let client: any;

export const initMailtrap = async () => {
  if (typeof window === "undefined") {
    const { MailtrapClient } = await import("mailtrap");
    client = new MailtrapClient({
      token: process.env.MAILTRAP_API_TOKEN!,
    });
  }
};

export const sendWelcomeEmail = async (toEmail: string, name: string) => {
  if (typeof window !== "undefined") {
    console.error("sendWelcomeEmail should only be called on the server side");
    return;
  }

  if (!client) {
    await initMailtrap();
  }

  const sender = { name: "PostgeniX", email: "hello@demomailtrap.com" };

  await client.send({
    from: sender,
    to: [{ email: toEmail }],
    subject: "Welcome to PostgeniX!",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0;">
          <tr>
            <td style="text-align: center;">
              <h1 style="color: #1a73e8;">Welcome to PostgeniX, ${name}!</h1>
              <p style="font-size: 18px;">We're thrilled to have you onboard.</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px;">
              <p>Hi ${name},</p>
              <p>Thank you for signing up with <strong>PostgeniX</strong>. We're excited to help you on your journey to create amazing posts and connect with your audience.</p>
              <p>To get started, simply log in to your account and begin exploring all the tools and features we have to offer.</p>
              <div style="text-align: center; margin-top: 20px;">
                <a href="https://postgenix.vercel.app/signin" style="background-color: #1a73e8; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; display: inline-block;">Log in to Your Account</a>
              </div>
              <p style="margin-top: 20px;">If you have any questions, feel free to reply to this email or visit our <a href="https://postgenix.com/support" style="color: #1a73e8;">Support Center</a>.</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; text-align: center; color: #999;">
              <p style="font-size: 12px;">You are receiving this email because you signed up for PostgeniX.</p>
              <p style="font-size: 12px;">&copy; 2024 PostgeniX. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
}