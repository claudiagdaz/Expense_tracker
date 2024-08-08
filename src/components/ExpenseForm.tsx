import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

import categories from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50, { message: "Description must be less than 50 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01, { message: "Please input a number between $0.01 and $100,000" })
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

export type ExpenseFormData = z.infer<typeof schema>;

export interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
}
const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input
            {...register("description")}
            id='description'
            type='text'
            className='form-control'
          />
          {errors.description && (
            <p className='text-danger'>{errors.description.message}</p>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id='amount'
            type='number'
            min={0}
            className='form-control'
          />
          {errors.amount && (
            <p className='text-danger'>{errors.amount.message}</p>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            {...register("category")}
            id='category'
            className='form-select'
          >
            <option value=''></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className='text-danger'>{errors.category.message}</p>
          )}
        </div>
        <div>
          <button className='btn btn-primary'>Add expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
