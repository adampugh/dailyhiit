import { useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import setScrollBarWidth from 'set-scrollbar-width';

import useDrag from '../utils/useDrag';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const ScrollCards = ({ cards, Component }) => {
    useEffect(() => {
        setScrollBarWidth();
    }, []);

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
            <div className='pt-10 overflow-x-hidden mr-break-out' onMouseLeave={dragStop}>
                <ScrollMenu onMouseDown={() => dragStart} onMouseUp={() => dragStop} onMouseMove={handleDrag}>
                    {cards.map((props, i) => {
                        const marginRight = cards.length - 1 === i ? 'mr-64' : 'mr-5';
                        return (
                            <div className={`${marginRight} cursor-grab select-none`} key={props.title}>
                                <Component {...props} />
                            </div>
                        );
                    })}
                </ScrollMenu>
            </div>
        </div>
    );
};

export default ScrollCards;
