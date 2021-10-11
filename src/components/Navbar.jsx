import {useState,useEffect} from "react"
import {Button ,Menu,Typography,Avatar} from "antd";
import {Link} from "react-router-dom";
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined,FundOutlined,MenuOutlined} from "@ant-design/icons";
import icon from "./images/cryptocurrency.png"

export default function Navbar(){

   const [activeMenu,setActiveMenu] = useState(true);
   const [screensize,setScreenSize] = useState(null);

 useEffect(()=>{

   const handleResize=()=> setScreenSize(window.innerWidth);
   window.addEventListener("resize",handleResize)

   handleResize();

   return() => window.removeEventListener('resize',handleResize)
 
 },[]);

 useEffect(()=>{
 	if(screensize<=800){
 		setActiveMenu(false);
 	}else{
 		setActiveMenu(true);
 	}
 },[screensize])


	return(

<div className="Nav-container">
<div className="logo-container">
<Avatar src={icon} size="large"/>
<Typography.Title level={2} className="logo">
<Link to="/">Cryptoapp</Link>
</Typography.Title>

<Button className="menu-control-container" onClick={()=> setActiveMenu(!activeMenu)}>
   <MenuOutlined/>

</Button>
</div>

{activeMenu && (
<Menu theme="dark">
  <Menu.Item icon={<HomeOutlined/>}>
  <Link to="/">Home</Link>
</Menu.Item>

<Menu.Item icon={<FundOutlined/>}>
  <Link to="/cryptocurrencies">Cryptocurrency</Link>
</Menu.Item>

<Menu.Item icon={<MoneyCollectOutlined/>}>
  <Link to="/exchange">Exchange</Link>
</Menu.Item>

<Menu.Item icon={<BulbOutlined/>}>
  <Link to="/news">News</Link>
</Menu.Item>

</Menu>



	)}


{/*
	<Button className="menu-control-container">

	</Button>
*/}
</div>
		)
}