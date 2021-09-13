import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Grid from '../../components/Grid';
import Input from '../../components/Input';
import useProjects from '../../hooks/useProjects';
import Project from './Project';

const HomePage = () => {
  const { storedValue, setValue, remove } = useProjects('projects', []);
  const [projectName, setProjectName] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (!projectName.trim().length) return;
    setValue(projectName);
    setProjectName('');
  };

  useEffect(() => {
    console.log('storedValue changed', storedValue);
  }, [storedValue]);

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="projectName"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Nouveau projet"
        />
        <Button>Enregistrer</Button>
      </Form>
      <Grid>
        {storedValue.length ? (
          storedValue.map((project) => (
            <Project key={project.id} project={project} remove={remove} />
          ))
        ) : (
          <p>Aucun projet pour le moment</p>
        )}
      </Grid>
    </>
  );
};

export default HomePage;
