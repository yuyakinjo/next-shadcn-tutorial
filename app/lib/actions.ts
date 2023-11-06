'use server';

import { revalidatePath } from 'next/cache';
import { TodoSchema } from '../todos/schema';

const API_URL = process.env.API_URL ?? '';

export async function completeTodo(formData: FormData) {
  const id = formData.get('id')?.toString();
  const completed = formData.get('completed')?.toString().includes('true');
  try {
    await fetch(`${API_URL}/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }),
    });
    revalidatePath(`/todos`);
    return { message: 'Todo updated successfully' };
  } catch (error) {
    return { message: 'Todo update failed' };
  }
}

export async function updateTodo(formData: FormData) {
  const formToObject = Object.fromEntries(formData);
  const validate = TodoSchema.safeParse(formToObject);
  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Todo.',
    };
  }
  const { data } = validate;
  try {
    await fetch(`${API_URL}/todos/${data.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validate.data),
    });
    revalidatePath(`/todos`);
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Todo.',
    };
  }
}
