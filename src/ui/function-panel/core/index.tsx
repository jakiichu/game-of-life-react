import type {ReactNode} from 'react';
import {GlassWrapper} from "@/ui/ui-kit/glass-wrapper";
import style from '../style/function-panel.module.css'

interface IFunctionPanelProps {
    isActive: boolean

    toggle(): void
}

const FunctionPanel = ({isActive, toggle}: IFunctionPanelProps): ReactNode => {
    return (
        <GlassWrapper className={style.panel}>
            <button className='main-button' aria-checked={isActive}
                    onClick={toggle}>{isActive ? 'Стоп' : 'Старт'}</button>
        </GlassWrapper>
    );
};

export {FunctionPanel};