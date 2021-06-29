import React from 'react';
import './PageHeader.scss';

export function PageHeader({ title, actions, onBack }) {
  return (
    <header className="page-header">
      <div className="page-header__container">
        <h1 className="page-header__title">{title}</h1>
        <div className="page-header__actions buttons">{actions}</div>
      </div>
      <BackButton onBack={onBack} />
    </header>
  );
}

function BackButton({ onBack }) {
  if (!onBack) return null;
  return (
    <button onClick={onBack} className="button button_link">
      <span role="img">🡰</span> Back
    </button>
  );
}
