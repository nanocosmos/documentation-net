import React from 'react';
import styles from './styles.module.css'

// IMPORTANT: image must be served from static source, therefore create a public subdirectory, like: assets/<used_dir>/public , place the needed asset there and be sure to sync with the staticDirectories property in docusaurus.config.js
// scaling is available between 30-80% in 10% steps
export const ScaledImage = ({image, alt, widthScaling, title, description}) => {
    if (alt === undefined) 
        alt = 'example'; 
    
    if (widthScaling === undefined) {
        return (
            <div className={styles['scaled-image-container']}> 
                <img src={`/${image}`} alt={alt} />
            </div>
        );
    }

    return (
        <div className={styles['scaled-image-container']}>
            <img src={`/${image}`} alt={alt} className={styles[`scaled-image-${widthScaling}`]} />
            { title && 
                <div className={styles['scaled-image-textbox']}>
                    <div>
                    <ImageTitle title={title} />
                    <ImageDescription description={description}/>
                    </div>
                </div> }
        </div>
    ) 
}

const ImageTitle = ({title}) => {
    return (
        <div className="badge">
            <span>{title}</span>
        </div>
    ) 
}

const ImageDescription = ({description}) => {
    return (
        <div className={styles['scaled-image-description']}>
            <span>{description}</span>
        </div>
    )   
}
