import {useState,useEffect} from "react";
import millify from "millify";
import {Link} from "react-router-dom";
import {Row,Col,Input,Card} from 'antd';

import {useGetCryptosQuery} from "./services/cryptoApi";

export default function Cryptocurrency({simplified}){

const count= simplified? 10:100;
	const{ data: cryptoList , isFetching} = useGetCryptosQuery(count);
    const [cryptos,setCryptos] = useState(cryptoList?.data?.coins);
    const [searchTerm,setSearchTerm]=useState('')

useEffect(()=>{
	setCryptos(cryptoList?.data?.coins);
	const filteredData = cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
    setCryptos(filteredData)
},[cryptoList,searchTerm]);

 if(isFetching) return 'loading...';

	return(
<div>
{
	!simplified && (
<div className="search-crypto">
<Input placeholder="Search Cryptocurrency" onChange={(e)=> setSearchTerm(e.target.value)}/>
</div>
		)
}

<Row gutter={[32,32]} className="crypto-card-container">
{cryptos?.map((currency)=>(
<Col xs={24} sm={12} lg={6} className="cypto-card" key={currency.id}>
<Link to={`/crypto/${currency.id}`}>
<Card
   title={`${currency.rank}.${currency.name}`}
   extra={<img style={{height:"35px"}} className="crypto-image" src={currency.iconUrl}/>}
   hoverable
>
<p>Price : {millify(currency.price)}</p>
<p>Market Cap:{millify(currency.marketCap)}</p>
<p>Daily Change:{millify(currency.change)} %</p>
</Card>
</Link>
</Col>
	))}
</Row>
</div>

		)
}