import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import DateTime from '../../components/DateTime';

const Item = ({ comment }) => (
  <Card>
    <DateTime>
      {new Date(comment.id).toLocaleString('fr').split(', ').join(' à ')}
    </DateTime>
    <p dangerouslySetInnerHTML={{ __html: comment.value }} />
  </Card>
);

Item.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
