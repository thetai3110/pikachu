import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18n from './i18n/i18n';
import { useEffect } from 'react';

function App() {
  const { t } = useTranslation();
  const language = localStorage.getItem('language');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  }
  useEffect(()=>{
    if(!localStorage.getItem('language')){
      localStorage.setItem('language', 'vi');
    }
  },[])
  useEffect(() => {
    i18n.changeLanguage(language || 'vi');
  }, [language])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
          <button onClick={() => changeLanguage('vi')}>Tiếng việt</button>
          <button onClick={() => changeLanguage('en')}>English</button>

          {t('name')} + {language}
      </header>
    </div>
  );
}

export default App;
