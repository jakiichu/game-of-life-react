import {times} from "es-toolkit/compat";
import type {IItems} from "@/bll/interface";

const tableGenerator = (cols: number, rows: number): IItems => {
    return times(rows, (rowIndex) => times(cols, (colIndex) => ({
        id: crypto.randomUUID(),
        value: false,
        colIndex,
        rowIndex
    })))
}


export default tableGenerator
