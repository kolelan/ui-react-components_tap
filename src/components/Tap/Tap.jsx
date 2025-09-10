import React from 'react';
import styles from './Tap.module.css';

const Tap = ({
                 size = 100,
                 shape = 'circle',
                 bgColor = '#ffffff',
                 contentColor = '#000000',
                 borderColor = '#000000',
                 borderSize = 1,
                 bgOpacity = 1,
                 contentOpacity = 1,
                 content = 'Tap',
                 fontSize = 16,
                 offsetX = 0,
                 offsetY = 0,
                 borderEnabled = true,
                 className = ''
             }) => {
    const containerStyle = {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: bgColor,
        opacity: bgOpacity
    };

    // Добавляем обводку только если она включена
    if (borderEnabled && borderSize > 0) {
        containerStyle.border = `${borderSize}px solid ${borderColor}`;
    }

    const contentStyle = {
        color: contentColor,
        opacity: contentOpacity,
        fontSize: `${fontSize}px`,
        transform: `translate(${offsetX}px, ${offsetY}px)`
    };

    const getShapeClass = () => {
        switch (shape) {
            case 'circle': return styles.circle;
            case 'square': return styles.square;
            case 'triangle-down': return styles.triangleDown;
            case 'triangle-up': return styles.triangleUp;
            case 'diamond': return styles.diamond;
            default: return styles.circle;
        }
    };

    return (
        <div
            className={`${styles.tapContainer} ${getShapeClass()} ${className}`}
            style={containerStyle}
        >
            <div
                className={styles.content}
                style={contentStyle}
            >
                {content}
            </div>
        </div>
    );
};

export default Tap;