import type {ReactNode} from 'react';
import type {ITableProps} from "../interface";
import TableItem from "@/ui/table/ui/item/core";


const Table = ({items}: ITableProps): ReactNode => {

    return (
        <div className=''>
            {
                items?.map(columns => (
                    <div className='flex'>
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
