import type {ReactNode} from 'react';
import type {GlassWrapperProps} from "@/ui/ui-kit/glass-wrapper/interface";
import s from '../style/style.module.css'

const GlassWrapper = ({className = '', ...props}: GlassWrapperProps): ReactNode => {
    return (
        <div className={`${s.glass} ${className}`} {...props}/>
    );
};

export {GlassWrapper};