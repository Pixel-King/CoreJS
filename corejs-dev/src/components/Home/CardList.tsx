import * as React from "react";
import OneCard from "./Card";
import { CardType } from "./types/types";

export default function CardList(textCards: CardType[]) {
    const cardElements = textCards.map((card) =>
        <div key = {card.id}>{OneCard(card)}</div>
        )
    return (
        <div className="wrapper_cards">
            {cardElements}
        </div>
    )
} 

