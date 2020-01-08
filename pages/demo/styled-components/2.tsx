import styled from 'styled-components';
import Header from '../../../components/demo/header';
import React from 'react';

const padding = '3em';

const Section = styled.section`
  color: white;
  /* Pass variables as inputs */
  padding: ${padding};
  /* Adjust the background from the properties */
  background: ${(props: { background: string }) => props.background};
`;

export default () => (
	<Section background="cornflowerblue"><Header />
		✨ Magic
	</Section>
);
