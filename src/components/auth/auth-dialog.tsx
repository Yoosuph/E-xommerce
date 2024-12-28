import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { AuthForm } from './auth-form';

export function AuthDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
          Sign In
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-medium">Welcome to Sarah Investment</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-500">
            Sign in to your account or create a new one
          </Dialog.Description>
          <AuthForm />
          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}