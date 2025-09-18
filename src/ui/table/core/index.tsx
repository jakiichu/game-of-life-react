import {type ReactNode, useEffect, useState} from 'react';
import type {ITableProps} from "../interface";
import TableItem from "@/ui/table/ui/item/core";
import style from '../style/table.module.css'

const targetHtmlElementElement = (event: Event) => (event as MouseEvent).target as HTMLElement;


const Table = ({items, pause, resume}: ITableProps): ReactNode => {
    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        const handleMouseDown = (e: Event) => {
            if (targetHtmlElementElement(e)?.ariaLabel !== null) {
                setIsMouseDown(true);
                pause()
            }
        }
        const handleMouseUp = (e: MouseEvent) => {
            if (targetHtmlElementElement(e)?.ariaLabel !== null) {
                setIsMouseDown(false);
                resume()
            }
        };
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div>
            {
                items?.map(columns => (
                    <div className={style.tableIRow}>
                        {
                            columns.map(rows => (
                                <TableItem isMouseDown={isMouseDown} {...rows}/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Table;
