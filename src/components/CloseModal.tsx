'use client';

import { X } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const CloseModal = () => {
  const router = useRouter();

  return (
    <Button
      className="h-6 w-6 p-0"
      aria-label="close modal"
      onClick={() => router.back()}
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default CloseModal;
