import {times} from "es-toolkit/compat";
import type {IItems} from "@/bll/interface";

const tableGenerator = (cols: number, rows: number): IItems => {
    return times(rows, () => times(cols, () => ({id: crypto.randomUUID(), value: false})))
}


export default tableGenerator
