import * as React from 'react';

export interface HeaderProps {}

export default function App(props: HeaderProps) {
  console.log('render');
  return (
    <div>
      <h1 className="header">Header</h1>
    </div>
  );
}
