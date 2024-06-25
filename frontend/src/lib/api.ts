import { type ApiRoutes } from "@server/app.ts";
import { CreateExpense } from "@server/sharedTypes";
import { queryOptions } from "@tanstack/react-query";
import { hc } from "hono/client";

const client = hc<ApiRoutes>("/");

export const api = client.api;

async function getCurrentUser() {
  const result = await api.me.$get();
  if (!result.ok) {
    throw new Error("Failed to fetch total spent");
  }
  const data = await result.json();
  return data;
}

export const userQueryOptions = queryOptions({
  queryKey: ["get-current-user"],
  queryFn: getCurrentUser,
  staleTime: Infinity,
});

export async function getAllExpenses() {
  const result = await api.expenses.$get();
  if (!result.ok) {
    throw new Error("Failed to fetch total spent");
  }
  const data = await result.json();
  return data;
}

export const getAllExpensesQueryOptions = queryOptions({
  queryKey: ["get-all-expenses"],
  queryFn: getAllExpenses,
  staleTime: 1000 * 60 * 5,
});

export async function createExpense({ value }: { value: CreateExpense }) {
  const res = await api.expenses.$post({ json: value });
  if (!res.ok) {
    throw new Error("Failed to create expense");
  }
  const newExpense = await res.json();
  return newExpense;
}

export const loadingCreateExpenseQueryOptions = queryOptions<{
  expense?: CreateExpense;
}>({
  queryKey: ["loading-create-expense"],
  queryFn: async () => {
    return {};
  },
  staleTime: Infinity,
});
