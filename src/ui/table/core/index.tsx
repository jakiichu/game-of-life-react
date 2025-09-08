import type {ReactNode} from 'react';
import type {ITableProps} from "../interface";
import TableItem from "@/ui/table/ui/item/core";
import style from '../style/table.module.css'

const Table = ({items}: ITableProps): ReactNode => {

    return (
        <div>
            {
                items?.map(columns => (
                    <div className={style.tableFlex}>
                        {
                            columns.map(rows => (
                                <TableItem {...rows}/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Table;
