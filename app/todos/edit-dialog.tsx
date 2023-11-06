'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog" // prettier-ignore
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Todo } from './page';
import { updateTodo } from '../lib/actions';
import { useState } from 'react';

export default function EditDialog({ todo }: Record<'todo', Todo>) {
  const [checked, setChecked] = useState(todo.completed);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">編集</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ToDo 編集</DialogTitle>
        </DialogHeader>
        <form action={updateTodo}>
          <input type="hidden" name="id" value={todo.id} />
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                タイトル
              </Label>
              <Input
                name="title"
                defaultValue={todo.title}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                詳細
              </Label>
              <Input
                name="description"
                defaultValue={todo.description}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="completed" className="text-right">
                完了
              </Label>
              <input
                type="checkbox"
                name="completed"
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                value={`${checked}`}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">変更</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
