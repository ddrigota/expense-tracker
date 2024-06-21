import {
  date,
  index,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const expenses = pgTable(
  "expenses",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    title: text("title").notNull(),
    amount: numeric("amount", { precision: 12, scale: 2 }).notNull(),
    date: date("date").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  expenses => {
    return {
      userIdIndex: index("name_idx").on(expenses.userId),
    };
  }
);

// This is converting pgTable to a zod schema
export const insertExpensesSchema = createInsertSchema(expenses, {
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  amount: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: "Amount must be a positive number with up to 2 decimal places",
  }),
});
export const selectExpensesSchema = createSelectSchema(expenses);
