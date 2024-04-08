
import './App.css';
import Header from './components/header/Header';
import PromotionHeader from './components/promotionHeader/PromotionHeader';
import LoginScreen from './screens/LoginScreen/LoginScreen';


function App() {
  return (
    <div className="App">
      <PromotionHeader />
      <Header />
      <LoginScreen />
    </div>
  );
}

export default App;