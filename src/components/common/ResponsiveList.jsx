
import { useEffect, useLayoutEffect, useRef, useState } from "react";


export default function ResponsiveList({ achievements }) {
    console.log(achievements);
    
    const containerRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(achievements.highlighted.length);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const updateVisible = () => {


            const children = Array.from(container.children);
            let totalWidth = container.clientWidth;
            let usedWidth = 0;
            let count = 0;


            for (const child of children) {
                const childWidth = child.scrollWidth;
                if (usedWidth + childWidth < totalWidth) {
                    usedWidth += childWidth + 15;
                    count++;
                } else break;
            }
            if (count < achievements.highlighted.length) count = Math.max(0, count - 1);
            setVisibleCount(count);
        };

        updateVisible();
        window.addEventListener("resize", updateVisible);
        const observer = new ResizeObserver(updateVisible);
        observer.observe(container);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateVisible);
        };
    }, [achievements]);

    const hiddenCount = achievements.length - visibleCount;

    return (
        <ul
            ref={containerRef}
            className="achievements-list"
        >
            {achievements.highlighted.slice(0, visibleCount).map((item, i) => (
                <li key={i}>
                    <div className="achievements-img-container">
                        <img src={item.path} alt={item.name} />
                    </div>
                </li>
            ))}

            {hiddenCount > 0 && (
                <li
                    className="achievements-img-container"
                >
                    +{hiddenCount}
                </li>
            )}
        </ul>
    );
};