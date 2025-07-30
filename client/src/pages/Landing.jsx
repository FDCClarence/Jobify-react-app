import styled from 'styled-components'

const Landing = () => {
  return <Wrapper>
    <h1>LANDING PAGE</h1>
    <div className='content'>content test</div>
  </Wrapper>
}

//Styled Components
const Wrapper = styled.div`
background : red;

h1{
  color : white;
}

.content{
  background : blue;
  color : yellow;
}
`;


export default Landing