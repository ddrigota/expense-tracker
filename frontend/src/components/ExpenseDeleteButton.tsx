import { deleteExpense, getAllExpensesQueryOptions } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";

function ExpenseDeleteButton({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteExpense,
    onError: () => {
      toast("Error", {
        description: `Failed to delete expense: ${id}`,
      });
    },
    onSuccess: () => {
      toast("Expense Deleted", {
        description: `Successfully deleted expense: ${id}`,
      });

      queryClient.setQueryData(
        getAllExpensesQueryOptions.queryKey,
        (existingExpenses) => ({
          ...existingExpenses,
          expenses: existingExpenses!.expenses.filter((e) => e.id !== id),
        }),
      );
    },
  });
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => mutation.mutate({ id })}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? "..." : <Trash2 className="h-4 w-4" />}
    </Button>
  );
}

export default ExpenseDeleteButton;
