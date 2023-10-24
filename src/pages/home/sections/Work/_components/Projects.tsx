import clsx from 'clsx';
import React, { useRef } from 'react';
import { projects } from '../_constants/projects.const';



type Props = {
    className?: string,
};

const Projects: React.FC<Props> = (props) => {
    const { className = '' } = props;
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className={clsx(className, ["grid grid-cols-2 relative overflow-hidden"])}>
            {
                projects.map(project => (
                    <a href={project.href} target="_blank">
                        <img key={project.id}
                            className='imageThumg imageThumg1 object-cover w-full h-full border-2 border-solid border-white'
                            src={project.src}
                            alt={project.name}
                        />
                    </a>
                ))
            }
        </div>
    );
}

export default Projects;