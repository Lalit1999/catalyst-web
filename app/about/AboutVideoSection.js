"use client";

import { usePc } from '@utils' ;

import styles from './page.module.css';

export default function AboutVideoSection() {
  const pc = usePc() ;

  return (
    <div className={styles.frameCon}>
        <p className={styles.leftTitle}>Video Clips</p>
				<div  className={styles.frameConVideo}>
          <iframe style={{width: pc?'20vw':'40vw', height: pc?'11.22vw':'22.44vw', borderRadius: 6}} title="Youtube" src="https://www.youtube.com/embed/KG3U9G0fpoQ?si=OUGs2JcPIWxBfsgc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe style={{width: pc?'20vw':'40vw', height: pc?'11.22vw':'22.44vw', borderRadius: 6}} title="Youtube" src="https://www.youtube.com/embed/KG3U9G0fpoQ?si=OUGs2JcPIWxBfsgc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe style={{width: pc?'20vw':'40vw', height: pc?'11.22vw':'22.44vw', borderRadius: 6}} title="Youtube" src="https://www.youtube.com/embed/KG3U9G0fpoQ?si=OUGs2JcPIWxBfsgc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe style={{width: pc?'20vw':'40vw', height: pc?'11.22vw':'22.44vw', borderRadius: 6}} title="Youtube" src="https://www.youtube.com/embed/KG3U9G0fpoQ?si=OUGs2JcPIWxBfsgc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe style={{width: pc?'20vw':'40vw', height: pc?'11.22vw':'22.44vw', borderRadius: 6}} title="Youtube" src="https://www.youtube.com/embed/KG3U9G0fpoQ?si=OUGs2JcPIWxBfsgc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe style={{width: pc?'20vw':'40vw', height: pc?'11.22vw':'22.44vw', borderRadius: 6}} title="Youtube" src="https://www.youtube.com/embed/KG3U9G0fpoQ?si=OUGs2JcPIWxBfsgc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
			</div>
  ) ;
}

      
