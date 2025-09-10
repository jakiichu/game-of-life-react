import {type ReactNode} from 'react';
import type {ITableItemProps} from "@/ui/table/ui/item/interface";
import useTableStore from "@/bll/store";
import style from '../style/tableItem.module.css'

const TableItem = ({value, id}: ITableItemProps): ReactNode => {
    const {changeTableItem} = useTableStore()

    const handleChangeTableItem = () => changeTableItem(id)


    return (
        <button onClick={handleChangeTableItem} type='button' aria-checked={value}
                className={style.tableItem}/>
    );
};

export default TableItem;
