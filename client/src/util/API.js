import axios from 'axios'
const MY_KEY = process.env.REACT_APP_API_KEY;

// const handlerdata = () => {
//    // let products = this.state.products.join( `,+`);
    let products = "comics"
//    axios
//         .get(
//         `https://api.rainforestapi.com/request?api_key=${MY_KEY}&type=search&amazon_domain=amazon.com&search_term=${products}`
//     )
// .then(res => {
//    // this.setState({
//     console.log( res.data[0] )
//     return res.data;
// })
// .catch(error => console.error(`Something went wrong ${error}`));

// };


// export default handlerdata;

export default {
    getProducts : function(){
        return axios.get(`https://api.rainforestapi.com/request?api_key=${"50CCCA8849D24FF7967A7749BCC985F9"}&type=search&amazon_domain=amazon.com&search_term=${products}`)
    }
}