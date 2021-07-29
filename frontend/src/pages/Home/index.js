import { TitleArea, ButtonArea } from './HomeStlyes';
import { Button, Card } from '../../components';

const Index = ({ history }) => {
  const handleButton = (params) => {
    if (params === 'ongkir') {
      history.push('/cek-ongkir');
    } else {
      history.push('/cek-resi');
    }
  };

  return (
    <Card>
      <TitleArea>
        <h1>Aplikasi Tracking</h1>
      </TitleArea>

      <ButtonArea>
        <Button onClick={() => handleButton('ongkir')}>Cek Ongkir</Button>
      </ButtonArea>
    </Card>
  );
};

export default Index;
