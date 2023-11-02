'use server';

import { revalidatePath } from 'next/cache';

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
