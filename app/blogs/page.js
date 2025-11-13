"use client"

import Image from 'next/image' ;
import Link from 'next/link' ;

import { formatDate } from '@utils';
import { blogData } from '@data' ;
import { Title } from '@comps';
import styles from "./page.module.css";

const BlogCard = ({image, publishDate, title, subtitle, slug, authorName}) => {
    return (  
        <div key={title} className={styles.blogCard}>
            <Link className={styles.zoomCardLink} href={`/blogs/${slug}`}>
                <div className={styles.blogImageCon}>
                    <Image src={image} fill alt={title} sizes="27vw"/>
                </div>     
                <div className={styles.dateCon}>
                    <p className={styles.blogDate}>{authorName} &nbsp;&bull;&nbsp;{formatDate(publishDate)}</p>
                </div>
                <p className={styles.blogTitle}>{title}</p>
                <p className={styles.blogDescr}>{subtitle}</p>
            </Link> 
        </div>
    ) ;
};


const BlogsPage = () =>(
    <div className={styles.homeSection}>
        <Title title="Blogs by BrushRoute" subtitle="Explore our latest articles and insights" />
        <div className={styles.sectionContent}>
            <div className={styles.blogsCon}>
            {	blogData.map((one, i) => <BlogCard key={i} {...one} /> )}
            </div>
        </div>
    </div>
);

export default BlogsPage;