import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { sql } from 'drizzle-orm'

const client = postgres(process.env.DATABASE_URL!, { prepare: false })
const db = drizzle(client)

async function test() {
  try {
    // Try creating a simple test table directly
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS test_table (
        id TEXT PRIMARY KEY,
        name TEXT
      )
    `)
    console.log('✓ Test table created')

    // Check if it exists
    const result = await db.execute(sql`
      SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public'
    `)
    console.log('Tables in database:', result)

    await client.end()
  } catch (error) {
    console.error('Error:', error)
  }
}

test()