import type {ReactNode} from 'react';
import type {ITableItemProps} from "@/ui/table/ui/item/interface";
import useTableStore from "@/bll/store";

const TableItem = ({value, id}: ITableItemProps): ReactNode => {
    const {changeTableItem} = useTableStore()

    const handleChangeTableItem = () => changeTableItem(id)
    
    return (
        <button onClick={handleChangeTableItem} type='button'
                className={'w-10 h-10 border border-black ' + (value ? 'bg-black' : '')}/>
    );
};

export default TableItem;
