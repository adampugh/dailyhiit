// @ts-nocheck
import { useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import setScrollBarWidth from 'set-scrollbar-width';
import { Workout } from '../types';

import useDrag from '../utils/useDrag';
import DefaultCard from './DefaultCard';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
type ScrollCardsPropType = {
    // cards: Workout[];
    // Component: React.ReactNode;
    showDay?: boolean;
};

const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ScrollCards = ({ cards, Component, showDay = false }: ScrollCardsPropType) => {
    useEffect(() => {
        setScrollBarWidth();
        return () => setScrollBarWidth;
    }, [cards]);

    const { dragStart, dragStop, dragMove, dragging } = useDrag();
    const handleDrag =
        ({ scrollContainer }: scrollVisibilityApiType) =>
        (ev: React.MouseEvent) =>
            dragMove(ev, (posDiff) => {
                if (scrollContainer.current) {
                    scrollContainer.current.scrollLeft += posDiff;
                }
            });

    return (
        <div className='overflow-x-hidden mr-break-out'>
            <div className='pt-4 mr-break-out' onMouseLeave={dragStop}>
                <ScrollMenu onMouseDown={() => dragStart} onMouseUp={() => dragStop} onMouseMove={handleDrag}>
                    {cards &&
                        cards.map((props: Workout, i: number) => {
                            const marginRight = cards.length - 1 === i ? 'mr-24 md:mr-60' : 'mr-5';
                            return (
                                props !== null && (
                                    <div className={`${marginRight} cursor-grab select-none`} key={i}>
                                        {props.title ? <Component {...props} index={i} /> : <DefaultCard index={i} />}
                                        {showDay && (
                                            <h2 className='font-heading text-center mt-4'>
                                                {daysOfTheWeek[i].toUpperCase()}
                                            </h2>
                                        )}
                                    </div>
                                )
                            );
                        })}
                </ScrollMenu>
            </div>
        </div>
    );
};

export default ScrollCards;
