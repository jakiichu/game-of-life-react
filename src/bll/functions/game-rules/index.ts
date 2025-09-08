import type {ITableEntity, ITableState} from "@/bll/interface";
import {fiendNeighbour} from "@/bll/functions/fiend-neighbour";

const gameRules = (uniqGameFields: ITableState[]): ITableEntity[] => uniqGameFields.map((item) => {
    const filteredNeighboursLength = fiendNeighbour(item, uniqGameFields).filter(value => value.value).length
    return {
        id: item.id,
        value: item.value ? [2, 3].includes(filteredNeighboursLength) :
            filteredNeighboursLength === 3
    }
})
export {
    gameRules
}
