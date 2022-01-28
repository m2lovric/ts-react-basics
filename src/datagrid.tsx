import React from 'react';

interface Item {
  id: number;
}

interface DataGridProps<T> {
  items: T[];
}

export default function DataGrid<T extends Item>({ items }: DataGridProps<T>) {
  return (
    <>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </>
  );
}
