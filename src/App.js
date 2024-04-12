
import './App.css';
import Header from './components/header/Header';
import PromotionHeader from './components/promotionHeader/PromotionHeader';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';


function App() {
  return (
    <div className="App">
      <PromotionHeader />
      <Header />
      <LoginScreen />
      {/* <RegistrationScreen /> */}
    </div>
  );
}

export default App;