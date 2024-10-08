import React from "react";
import styles from "./CardList.module.css"

interface CardListProps {
    children: React.ReactNode
}

const CardList = ({ children }: CardListProps) => {
    return (
            <div className={styles.cardList}>
                {children}
            </div>
    );
};

export default CardList;