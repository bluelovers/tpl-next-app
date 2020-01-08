import styled from 'styled-components';
import Header from '../../../components/demo/header';
import React from 'react';

const Container = styled.div`
 width: 100%;
 height: 100%;
 background: red;
`;

export default () => (
	<Container><Header />Hello World</Container>
)
