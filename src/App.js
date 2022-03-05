import './Assets/Styles/style.scss';
import Text from './Components/Text/Text';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Text isHeading tag='h1'>h1 Zażółć gęślą jaźńsize relative to the root font-size. If we change the root font-sizeme</Text>
        <Text tag='h2'>h2 Zażółć gęślą jaźń</Text>
        <Text tag='p' className=''>By using rem, we are making sure that each and every element, image or anything present on the webpage is using a relative size. REM unit makes everything to take their size relative to the root font-size. If we change the root font-size, all element will automatically change their sizes and hence, no need to make each element reduce size on small viewports.<Text tag='span'>  ggggggggggggg</Text></Text>
        <Text tag='h3'>h3 Zażółć gęślą jaźń</Text>
        <Text tag='p' className=''>By using rem, we are making sure that each and every element, image or anything present on the webpage is using a relative size. REM unit makes everything to take their size relative to the root font-size. If we change the root font-size, all element will automatically change their sizes and hence, no need to make each element reduce size on small viewports.</Text>
        <Text tag='h5'>h5 Zażółć gęślą jaźń<Text tag='span'>  ggggggggggggg</Text></Text>
        <Text tag='p' className=''>By using rem, we are making sure that each and every element, image or anything present on the webpage is using a relative size. REM unit makes everything to take their size relative to the root font-size. If we change the root font-size, all element will automatically change their sizes and hence, no need to make each element reduce size on small viewports.</Text>
        <Text tag='h6'>h6 Zażółć gęślą jaźń</Text>
        <Text tag='p' className='-small'>By using rem, we are making sure that each and every element, image or anything present on the webpage is using a relative size. REM unit makes everything to take their size relative to the root font-size. If we change the root font-size, all element will automatically change their sizes and hence, no need to make each element reduce size on small viewports.</Text>
        <Text tag='h2' className=''>h2 Zażółć gęślą jaźń</Text>
        <Text tag='p' className='-small'>By using rem, we are making sure that each and every element, image or anything present on the webpage is using a relative size. REM unit makes everything to take their size relative to the root font-size. If we change the root font-size, all element will automatically change their sizes and hence, no need to make each element reduce size on small viewports.</Text>
        <Text tag='p' className=''>p Zażółć gęślą jaźń</Text>
        <Text tag='p' className='-big'>By using rem, we are making sure that each and every element, image or anything present on the webpage is using a relative size. REM unit makes everything to take their size relative to the root font-size. If we change the root font-size, all element will automatically change their sizes and hence, no need to make each element reduce size on small viewports</Text>
        <Text tag='span'>Zażółć gęślą jaźń</Text>
      </header>
    </div>
  );
}

export default App;
