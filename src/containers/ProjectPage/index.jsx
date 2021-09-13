import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Textarea from '../../components/Textarea';
import useProject from '../../hooks/useProject';
import Item from './Item';

const ProjectPage = () => {
  const { projectName } = useParams();
  const [values, setValues] = useProject(projectName);
  const [state, setState] = useState('');
  const bottomRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.trim().length) return;
    setValues(state.replace(/\n\r?/g, '<br />'));
    setState('');
  };

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [values]);

  return (
    <div>
      {values.map((comment) => (
        <Item key={comment.id} comment={comment} />
      ))}
      <div ref={bottomRef} />
      <Form
        onSubmit={handleSubmit}
        position="sticky"
        bottom="3rem"
        direction="column"
      >
        <Textarea
          value={state}
          onChange={(e) => setState(e.target.value)}
          name="newComment"
          placeholder="Commentaire"
        />
        <Button>Enregistrer</Button>
      </Form>
    </div>
  );
};

export default ProjectPage;
