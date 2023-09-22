import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'

// IMPORTANT: image must be served from static source, therefore create a public subdirectory, like: assets/<used_dir>/public , place the needed asset there and be sure to sync with the staticDirectories property in docusaurus.config.js
// scaling is available between 10-100% in 10% steps
export const ScaledImage = ({image, alt, widthScaling, title, description}) => {
    useEffect(() => {
        const handleResize = () => {
            
        };
        window.addEventListener('resize', handleResize);

        // Initialize window size
        handleResize();
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (alt === undefined) 
        alt = 'This is an example.'; 
    
    if (widthScaling === undefined)
        widthScaling = 100;

    if ( title === undefined ) {
        return (
            <div className={styles[`notext-container-centered`]}>
                <img src={`/${image}`} className={styles[`image-${widthScaling}`]} alt={alt} />
                <figcaption className={styles['scaled-image-caption']}>{alt}</figcaption>
            </div>
            
        )
    }

    return (
        <div className={styles[`scaled-image-container-${widthScaling}`]}>
            <div className={styles['scaled-image']}>
                <img src={`/${image}`} alt={alt} />
                <figcaption className={styles['scaled-image-caption']}>{alt}</figcaption>
            </div>
            <div className={styles['scaled-image-textbox']}>
                <div className={styles["scaled-image-title"]}>
                    {title}
                </div>
                <div className={styles['scaled-image-description']}>
                    {description}
                </div>
            </div>
        </div>
    ) 
}
