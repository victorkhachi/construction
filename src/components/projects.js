import React from 'react'

export default function Projects() {
    const projects=[
        "Living Faith Church,Ogwashi-uku,Delta state",'mopol 13 Markurdi,Barracks,Benue State','State security Service,Asaba,Delta state','X-ray building,Federal Medical center,Asaba,Delta state','Nigerian National petroleum Corporation,Warri Refinery','MD private Building,Chrisofil Nig. Ltd,.ASaba,Delta','NDDC Road project/primary Health Care, Ogwashi-uku ,Delta State','Deputy Governors House ,DTS 2005','MD Paul Osaji Estate Consultant Resident',"St. christopher's father's house,GRA, Asaba, Delta state","St, Christopher Grotto,Asaba, Delta state",'Obi onyia memorial Hall, Asaba, Delta State','Construction of warehouse, Amuwo Odofin, Mile 2, Lagos'
    ]
    const content =projects.map(project=>(
        <li className='project-li'>{project}</li>
    ))
    console.log(content);
    return (
        <div style={{width:'100%',height:'fit-content'}}>
            <div className='project-div'>
                Here are some of our Projects:
            </div>
            <div className='project'>
            
              {content}
            </div>
        </div>
    )
}
