import clsx from 'clsx';
import React, { useRef } from 'react';
import { projects } from '../_constants/projects.const';
import Project from './Project';



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
                    <a key={project.id} href={project.href} target="_blank">
                        <Project name={project.name} src={project.src} />
                    </a>
                ))
            }
        </div>
    );
}

export default Projects;