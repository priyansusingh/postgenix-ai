
export default{
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials:{
    url: 'postgresql://neondb_owner:jdiIMWm3oe8D@ep-calm-night-a5ahqpn9.us-east-2.aws.neon.tech/postgenix?sslmode=require',
    connectionString: 'postgresql://neondb_owner:jdiIMWm3oe8D@ep-calm-night-a5ahqpn9.us-east-2.aws.neon.tech/postgenix?sslmode=require'
  }
};