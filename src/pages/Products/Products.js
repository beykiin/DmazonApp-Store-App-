import React, {useState} from 'react'
import {FlatList, View,} from 'react-native'
import Config from '../../../config/index';
import ProductCard from '../../components/ProductCard';
import styles from "./Products.style"
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error/';
import SearchBarCom from '../../components/SearchBarCom';

function Products({navigation}) {

    const [search,setSearch] = useState("")
    const {loading,data,error} = useFetch(Config.API_URL)

console.log(Config.API_URL)

  //   useEffect(() => {
  //     console.log("loading:", loading);
  //     console.log("data:", data);
  //     console.log("error:", error);
  // }, [loading, data, error]);

    const handleProductSelect = (id) =>{
      
      navigation.navigate("DetailPage",{id})
    }

    const filteredData = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

    const renderProducts = ({item})=><ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>;
    
    
    if(loading){return(<Loading/>)}
    if(error){
      
      return (<Error/>)
    }




    
  return (

        <View>
          <SearchBarCom setSearch={setSearch}/>
          <FlatList style={styles.container} data={filteredData} renderItem={renderProducts}/>
        </View>

  )
}

export default Products