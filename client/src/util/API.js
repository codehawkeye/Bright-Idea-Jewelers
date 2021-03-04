const MY_KEY = process.env.REACT_APP_API_KEY;

handlerdata = () => {
    let products = this.state.products.join( `,+`);
    axios
        .get(
        `https://api.rainforestapi.com/request?api_key=${MY_KEY}&type=search&amazon_domain=amazon.com&search_term=${products}`
    )
.then(res => {
    this.setState({
    data: res.data[0]
  });

})
.catch(error => console.error(`Something went wrong ${error}`));

};