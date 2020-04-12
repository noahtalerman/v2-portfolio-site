import React from 'react'
import mediaPageStyles from './media-page.module.scss'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'

const ImageContainer = (props) => {
    return (
        <div className={mediaPageStyles.imageContainer}>
            <img src={props.url} alt={props.imgAlt}/>
        </div>
    )
}

const Section = () => {
    const imgs = [{ url: {img1}, alt: 'alt' }, 
                  { url: {img2}, alt: 'alt' }, 
                  { url: {img3}, alt: 'alt' }, 
                  { url: {img4}, alt: 'alt' }, 
                  { url: {img5}, alt: 'alt' }, 
                  { url: {img6}, alt: 'alt' },
                  { url: {img1}, alt: 'alt' }, 
                  { url: {img2}, alt: 'alt' }, 
                  { url: {img3}, alt: 'alt' }, 
                  { url: {img4}, alt: 'alt' }, 
                  { url: {img5}, alt: 'alt' }, 
                  { url: {img6}, alt: 'alt' },
                  { url: {img1}, alt: 'alt' }, 
                  { url: {img2}, alt: 'alt' }, 
                  { url: {img3}, alt: 'alt' }, 
                  { url: {img4}, alt: 'alt' }, 
                  { url: {img5}, alt: 'alt' }, 
                  { url: {img6}, alt: 'alt' }];
    const imageElems = imgs.map((img, i) => {
        const key = Object.keys(img.url)[0]
        const info = { url: img.url[key], imgAlt: img.alt}
        return (
            <ImageContainer key={`${key}${i}`} url={info.url} alt={info.imgAlt} />
        )
    })
    return (
        <section className={mediaPageStyles.mediaSection}>
            {imageElems}
        </section>
    )
}

const MediaPage = () => {
    return (
        <div>
            <Section>

            </Section>
        </div>
    )
}

export default MediaPage