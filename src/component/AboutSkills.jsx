import React from 'react'
import ProgressBar from './ProgressBar'
import { dataSkill } from '../utils/skills'

export default function AboutSkills() {
    return (
        <div>
            <div>
                <h4 className='mt-3 mb-1 text-2xl'>Skills</h4>
                <div>
                    {
                        dataSkill && dataSkill.map((item)=><ProgressBar class={"bg-red-500"} skill={item.skill} value={item.value}></ProgressBar>)
                        /* Ajout vérification existence dataSkill , sinon remplissage vide */
                    }
                    
                </div>
            </div>
        </div>
    )
}
