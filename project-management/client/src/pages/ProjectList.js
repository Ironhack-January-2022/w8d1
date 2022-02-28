import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import AddProject from '../components/AddProject';


export default function ProjectList() {

	const [projects, setProjects] = useState([])
	console.log(projects)
	// get all the projects from the backend / server
	const getAllProjects = () => {
		// request 'api/projects'
		axios.get('/api/projects')
			.then(response => {
				console.log(response.data)
				// set the state of projects
				setProjects(response.data)
			})
			.catch(err => {
				console.log(err)
			})
	}

	useEffect(() => {
		getAllProjects()
	}, [])

	return (
		<>
			<h1>All the projects</h1>
			{projects.map(project => <ProjectCard key={project._id} {...project} />)}
			<AddProject refreshProjects={getAllProjects} />
		</>
	)
}
