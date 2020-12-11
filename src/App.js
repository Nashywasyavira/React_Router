import React from 'react';
import Utama from'./Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div class="Container">
        <nav class="navbar navbar-light">
          <div>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link" href="/">Beranda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/tentangsaya">Tentang Saya</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/karya">Karya</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/kontak">Kontak</a>
              </li>
            </ul>
          </div>
        </nav>
        <n><Utama /></n>
      </div>
    );
  }
}
export default App;
