import { Container } from '@mui/material';
import { StyledWrapper } from './styles';
import TitleAndForm from '../../components/Home/Form/TitleAndVideo/TitleAndVideo';
import GridContentItem from '../../components/Home/GridContentItem/GridContentItem';
import ContactSection from '../../components/Home/ContactSection/ContactSection';

const Home = () => {

  return (
    <StyledWrapper>
      <Container maxWidth="lg">
        
        <TitleAndForm />

        <GridContentItem />

        <ContactSection />

      </Container>
    </StyledWrapper>
  );
};

export default Home;