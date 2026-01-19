'use client';

import { imgpdfrender } from "../../data/researchpaperimagespdf";
import ResearchCard from "./ResearchCard";

const ResearchList=()=>{

    const researchlist=imgpdfrender();

    return (
        <>
            {
                researchlist.map((item)=>(
                    <ResearchCard
                    key={item.id}
                    image={item.image}
                    link={item.link}
                    />

                ))
            }
        
        </>
    )


}


export default ResearchList;