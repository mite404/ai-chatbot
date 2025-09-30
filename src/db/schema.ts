import { pgTable, varchar, uuid, boolean, timestamp, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const conversations = pgTable("conversations", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid().notNull().references(() => users.id),
  created_at: timestamp().defaultNow().notNull(),
  title: varchar({ length: 255 }).notNull()
})

export const messages = pgTable("messages", {
  id: uuid().primaryKey().defaultRandom(),
  conversation_id: uuid().notNull().references(() => conversations.id),
  created_at: timestamp().defaultNow().notNull(),
  content: text().notNull(),
  isUser: boolean()
})