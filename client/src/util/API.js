import axios from 'axios'
const MY_KEY = "ABC96057C4554BD788FAFF40D09096C0";

const handlerdata = () => {
   // let products = this.state.products.join( `,+`);
   let products = "jewelry"
   axios
        .get(
        `https://api.rainforestapi.com/request?api_key=${MY_KEY}&type=search&amazon_domain=amazon.com&search_term=${products}`
    )
.then(res => {
   // this.setState({
       console.log(res)
       console.log(res.data)
       let searchResults =  res.data.search_results
       // this is logging out the response properly
       console.log( res.data.search_results);
    // console.log(res.data.searchresults);

    // Might have to create a temp object to pass back the data Array
    return searchResults
})
.catch(error => console.error(`Something went wrong ${error}`));

};


export default handlerdata;