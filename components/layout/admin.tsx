import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import * as React from 'react';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>Side Bar</div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Home</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
