import './App.css';
import {Switch,Route,Link} from "react-router-dom";
import {Layout,Typography,Space} from "antd";
import {Navbar,Home,Cryptocurrency,CryptoDetails,News,Exchange} from "./components"
function App() {
  return (
    <div className="app">
      <div className="navbar">
      <Navbar/>
      </div>
       <div className="main">
<Layout>
<Switch>
<Route exact path="/">
<Home/>
</Route>
<Route path="/cryptocurrencies">
<Cryptocurrency/>
</Route>
<Route  path="/crypto/:coinId">
<CryptoDetails/>
</Route>
<Route path="/exchanges">
<Exchange/>
</Route>
<Route path="/News">
<News/>
</Route>
</Switch>
</Layout>
      <div className="footer" level={1} style={{ color:"white",textAlign:"center"}}>
<Typography.Title>
CryptoApp <br/>
All rights reserved
</Typography.Title>
<Space>
<Link to="/">Home</Link>
<Link to="/exchanges">Exchanges</Link>
<Link to="/News">News</Link>

</Space>
      </div> 

      </div>
    </div>
  );
}

export default App;
