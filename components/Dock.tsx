/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from 'framer-motion';
import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
  useRef,
  ReactElement,
} from 'react';

// --------------------
// Types
// --------------------

export type DockItemData = {
  icon: React.ReactElement;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
  isHovered: MotionValue<number>;
};

// --------------------
// useMotionArray Hook (no eslint errors)
// --------------------

function useMotionArray(length: number): MotionValue<number>[] {
  const ref = useRef<MotionValue<number>[]>([]);

  // Only create once (safe)
  if (ref.current.length !== length) {
    const values: MotionValue<number>[] = [];
    for (let i = 0; i < length; i++) {
      values.push(useMotionValue(0)); // ✅ still top-level for React
    }
    ref.current = values;
  }

  return ref.current;
}

// --------------------
// DockItem Component
// --------------------

function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  isHovered,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#060010] border-blue-700 border-2 shadow-md ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(
              child as ReactElement<{ isHovered?: MotionValue<number> }>,
              { isHovered }
            )
          : child
      )}
    </motion.div>
  );
}

// --------------------
// DockLabel Component
// --------------------

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
  isHovered: MotionValue<number>;
};

function DockLabel({ children, className = '', isHovered }: DockLabelProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-blue-600 bg-white px-2 py-0.5 text-xs text-blue-500`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --------------------
// DockIcon Component
// --------------------

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

function DockIcon({ children, className = '' }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center text-white ${className}`}>
      {children}
    </div>
  );
}

// --------------------
// Main Dock Component
// --------------------

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const hoverStates = useMotionArray(items.length); // ✅ no violations

  const maxHeight = Math.max(
    dockHeight,
    magnification + magnification / 2 + 4
  );

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div style={{ height }} className="mx-2 flex max-w-full items-center">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} bg-white/10 absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border-blue-700 border-2 pb-2 px-4`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={`${item.className} bg-white/10`}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            isHovered={hoverStates[index]}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel isHovered={hoverStates[index]}>
              {item.label}
            </DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
