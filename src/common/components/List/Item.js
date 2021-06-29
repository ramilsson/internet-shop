import React from 'react';
import './Item.scss';

export function Item({ title, content, image, actions }) {
  return (
    <article className="list-item">
      <div className="list-item__image">{image}</div>
      <div className="list-item__container">
        <header className="list-item__header">
          <h2 className="list-item__title">{title}</h2>
        </header>
        <div className="list-item__content">{content}</div>
        <footer className="list-item__actions">{actions}</footer>
      </div>
    </article>
  );
}
