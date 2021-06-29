import React from 'react';
import { Item } from './Item';

List.Item = Item;

export function List({ items, renderItem }) {
  const listItems = items.map(renderItem);
  return <div className="list">{listItems}</div>;
}
