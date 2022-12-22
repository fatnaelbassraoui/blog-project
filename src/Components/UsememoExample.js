import { useMemo } from "react";

const list = useMemo(()=>
    listOfCard.map(card=>({
        ...card,
        props1: expensiveFunction(...),
        props2: unotherExpensiveFunction(...)
    })),
    [listOfCard]
)