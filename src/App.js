import './App.scss';
import Card from './Card';
import sedanIcon from './images/icon-sedans.svg';
import suvIcon from './images/icon-suvs.svg';
import luxury from './images/icon-luxury.svg';

function App() {
  const [sedanT, suvT, luxT] = ['sedan', 'suv', 'luxury'];
  const [content1, content2, content3] = [
    'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
  ];
  const [back1, back2, back3] = [
    'hsl(31, 77%, 52%)',
    'hsl(184, 100%, 22%)',
    'hsl(179, 100%, 13%)'
  ];
  
  return (
    <div className="App">
      <div className='Card-Holder'>
        <Card round='round-left' icon={sedanIcon} title={sedanT} content={content1} background={back1}/>
        <Card icon={suvIcon} title={suvT} content={content2} background={back2}/>
        <Card round='round-right' icon={luxury} title={luxT} content={content3} background={back3}/>
      </div>
    </div>
  );
}

export default App;
