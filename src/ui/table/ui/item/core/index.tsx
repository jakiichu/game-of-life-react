import {type ReactNode} from 'react';
import type {ITableItemProps} from "@/ui/table/ui/item/interface";
import useTableStore from "@/bll/store";
import style from '../style/tableItem.module.css'

const TableItem = ({value, id, isMouseDown}: ITableItemProps): ReactNode => {
    const {changeTableItem} = useTableStore();

    const handleMouseEnter = () => {
        if (isMouseDown) {
            changeTableItem([{id, value: !value}])
        }
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (e.button === 0) {
            changeTableItem([{id, value: !value}])
        }
    }


    return (
        <button
            type="button"
            aria-checked={value}
            className={style.tableItem}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
        />
    );
};

export default TableItem;
