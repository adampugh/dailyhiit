import { useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import setScrollBarWidth from 'set-scrollbar-width';
import { WorkoutType } from '../types';

import useDrag from '../utils/useDrag';
import Card from './Card';
import DefaultCard from './DefaultCard';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

type ScrollCardsProps = {
    cards: WorkoutType[];
    Component: React.FC;
};

const ScrollCards = ({ cards, Component }: ScrollCardsProps) => {
    useEffect(() => {
        setScrollBarWidth();
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
            <div className='pt-10 mr-break-out' onMouseLeave={dragStop}>
                <ScrollMenu onMouseDown={() => dragStart} onMouseUp={() => dragStop} onMouseMove={handleDrag}>
                    {cards &&
                        cards.map((props: WorkoutType, i: number) => {
                            const marginRight = cards.length - 1 === i ? 'mr-96' : 'mr-5';
                            return (
                                <div className={`${marginRight} cursor-grab select-none`} key={props.title}>
                                    {props.title ? <Component {...props} index={i} /> : <DefaultCard index={i} />}
                                </div>
                            );
                        })}
                </ScrollMenu>
            </div>
        </div>
    );
};

export default ScrollCards;

{
    /* <Component {...props} /> */
}
