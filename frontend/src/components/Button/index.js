import Button from './ButtonStyles';

const Index = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Index;
