import React from 'react';
import { Container } from 'common/components/Container';
import './AppFooter.scss';

export function AppFooter() {
  return (
    <footer className="app-footer">
      <Container>
        <p className="app-footer__copyright">
          <a
            href="https://github.com/khuzhinru/internet-shop"
            target="_blank"
            rel="noreferrer"
          >
            Internet-shop
          </a>{' '}
          by Ruslan Khuzhin
        </p>
      </Container>
    </footer>
  );
}
