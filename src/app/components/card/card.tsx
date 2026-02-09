import type { ReactNode } from 'react';
import styles from './card.module.css';

type CardProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

export function Card({ title, icon, children }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <div className={styles.baixo}>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>
  );
}
