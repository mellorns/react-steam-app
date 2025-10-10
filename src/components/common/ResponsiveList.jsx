
import { useEffect, useLayoutEffect, useRef, useState } from "react";


export default function ResponsiveList({ items }) {
    const containerRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(items.length);

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

            // залишаємо місце для "+N"
            if (count < items.length) count = Math.max(0, count - 1);
            setVisibleCount(count);
        };

        updateVisible();

        // 🔥 реагує як на зменшення, так і на збільшення
        window.addEventListener("resize", updateVisible);

        // ✅ спостереження за змінами самого контейнера
        const observer = new ResizeObserver(updateVisible);
        observer.observe(container);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateVisible);
        };
    }, [items]);

    const hiddenCount = items.length - visibleCount;

    return (
        <ul
            ref={containerRef}
            className="achievements-list"
        >
            {items.slice(0, visibleCount).map((item, i) => (
                <li key={i}>
                    <div className="achievements-img-container">
                        <img src={item.img} alt="" />
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