import React, {ReactNode} from 'react';

interface Props{
    id: string,
    children: ReactNode
}

export default function SectionComponent(props: Props) {
    return (
        <section id={props.id} className='flex pt-[130px] h-max min-h-screen relative w-full scroll-mb-2.5 snap-start'>
            {props.children}
        </section>
    );
};
