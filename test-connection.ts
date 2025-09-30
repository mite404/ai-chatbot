import 'dotenv/config'
import postgres from 'postgres'

async function testConnection() {
  try {
    const client = postgres(process.env.DATABASE_URL!, { prepare: false })
    const result = await client`SELECT 1 as test`
    console.log('Connection successful!', result)
    await client.end()
  } catch (error) {
    console.error('Connection failed:', error)
  }
}

testConnection()