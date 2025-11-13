"use client"

import { useState, useEffect } from 'react' ;
import { useParams } from 'next/navigation' ;
import Image from "next/image";

import { Loading, Viewer } from '@comps' ;
import { Whatsapp, Facebook, Linkedin, Twitter, Instagram } from '@icons' ;
import { formatDate } from '@utils';
import { blogData as data } from '@data';

import styles from "./page.module.css" ; 

const iconsLink = [
	{
		icon : <Facebook />,
		text : 'Facebook', 
		classColor: styles.facebook,
		link: 'https://www.facebook.com/login/',
	},
	{
		icon : <Twitter />,
		text : 'Twitter', 
		classColor: styles.twitter,
		link: 'https://x.com/i/flow/login?mx=2',
	},
	{
		icon : <Instagram />,
		text : 'Instagram', 
		classColor: styles.instagram,
		link: 'https://www.instagram.com/accounts/login/?hl=en',
	},
	{
		icon : <Whatsapp />,
		text : 'Whatsapp', 
		classColor: styles.whatsapp,
		link: 'https://www.whatsapp.com',
	},
	{
		icon : <Linkedin />,
		text : 'LinkedIn', 
		classColor: styles.linkedin,
		link: 'https://www.linkedin.com/login',
	},
] ;

const Blog = () => {
    const [ blogData, setBlogData ] = useState(null) ;

    const params = useParams() ;
    const { id } = params ;

	useEffect(() => {
		const resp = data.filter(blog => blog.slug === id)[0];
		setBlogData(resp) ;          
    }, [id]) ;

    if(blogData !== null) {
		const { title, authorName, authorImage, authorProfile, publishDate, content, subtitle, image } = blogData ;

        return (
            <div className={styles.blog}>
                <div className={styles.main}>
                    <div className={styles.mainHead}>
                        <p  className={styles.mainHeadTitle}>{title}</p>
                        <p className={styles.mainHeadSubHeading}>{subtitle}</p>
						<div className={styles.authorDetails}>
							<a href={authorProfile} target='_blank' className={styles.authorData}>
								<div className={styles.imageCon}>
									<Image fill src={authorImage} alt="author-image" sizes="(max-width: 600px) 183px, 4vw" />
								</div>
								<p>{authorName}</p>
							</a>
							<div className={styles.dotDiv} />
							<div className={styles.publishDate}>
								<p>Date: {formatDate(publishDate)}</p>
							</div>
						</div>
                    </div>
					<div className={styles.blogBanner}>
						<Image fill src={image} alt="blog-banner-image" />
					</div>
                    <div className={styles.mainBody}>
						<Viewer value={content} />
                    </div>
					<div className={styles.downBody}>
						<div className={styles.divLine} />
						<div className={styles.shareCon}>
							<p className={styles.shareHead}>Share this blog</p>
							<div className={styles.iconsCon}>
							{
								iconsLink.map((one,i)=>(
									<a className={`${styles.iconBox} ${one.classColor}`} key={i} href={one.link} target="_blank" rel="noopener noreferrer">
										{one.icon}
										<p className={styles.iconText}>{one.text}</p>
									</a>
								))
							}
							</div>
						</div>
					</div>
                </div>
            </div>
        ) ;
    }
    else
        return <Loading /> ;
}

export default Blog ;