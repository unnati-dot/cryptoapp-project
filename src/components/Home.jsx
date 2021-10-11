
import millify from 'millify';
import {Typography,Row,Col,Statistic} from "antd"
import {Link} from "react-router-dom"
import {Cryptocurrency,News} from "../components"
import {useGetCryptosQuery} from './services/cryptoApi'
const {Title} = Typography;

export default function Home(){

	const {data , isFetching}= useGetCryptosQuery(10);
	const globalStats = data?.data?.stats;
  if(isFetching) return 'loading...';
	return(
<div>
<Title level={2} className="heading">Global Crypto stats</Title>
<Row>
	<Col span={12}><Statistic title="total Cryptocurrencies" value={globalStats.total}/></Col>
	<Col span={12}><Statistic title="total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
	<Col span={12}><Statistic title="total market cap" value={millify(globalStats.totalMarketCap)}/></Col>
	<Col span={12}><Statistic title="total 24th volume" value={millify(globalStats.total24hVolume)}/></Col>
	<Col span={12}><Statistic title="total Markets" value={millify(globalStats.totalMarkets)}/></Col>


</Row>
<div className="home-heading-container">
<Title level={2} className="home-title"> Top 10 cryptocurrencies in the world</Title>
<Title level={3} className="show-more"> <Link to="/cryptocurrencies">Show More</Link></Title>

</div>
<Cryptocurrency simplified={true}/>

<div className="home-heading-container">
<Title level={2} className="home-title">Latest crypto news</Title>
<Title level={3} className="show-more"> <Link to="/news">Show More</Link></Title>

</div>
<News simplified/>


</div>

		)
}