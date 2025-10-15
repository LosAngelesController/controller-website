'use client';
import { ChevronDown, ChevronUp, Circle } from 'lucide-react';
import { useState } from 'react';

// ✅ Define props type
interface ExpandableTextProps {
  summary: string;
  details: React.ReactNode;
}

export default function ExpandableText({
  summary,
  details,
}: ExpandableTextProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className='mb-3 flex items-start gap-3'>
      <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-black' />
      <div className='text-lg leading-relaxed'>
        <button
          onClick={() => setOpen(!open)}
          className='text-left transition-colors hover:text-sky-700 focus:outline-none'
          aria-expanded={open}
        >
          {summary}
          {open ? (
            <ChevronUp className='ml-2 inline-block h-4 w-4' />
          ) : (
            <ChevronDown className='ml-2 inline-block h-4 w-4' />
          )}
        </button>

        {open && <p className='mt-2 text-base text-gray-700'>{details}</p>}
      </div>
    </div>
  );
}
