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
                        if (cards.length - 1 === i) {
                            return (
                                <div className='mr-96 cursor-grab select-none' key={props.id}>
                                    <Component {...props} />
                                </div>
                            );
                        }
                        return (
                            <div className='mr-5 cursor-grab select-none' key={props.id}>
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
