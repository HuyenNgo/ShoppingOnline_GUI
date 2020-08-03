import getUrl from '../../Common/UrlConfig';

const getAllProduct = (keyword,page,pageSize) => {
    let url= getUrl()+'product/getall?';
    if(keyword == ""){
        url = url + 'page='+page+'&pageSize='+pageSize;
    }else{
      
        url = url + 'keyword='+keyword+'&page='+page+'&pageSize='+pageSize;
    } 
    console.log('CurrentURL=' +url);  
    return fetch(url)
    .then(res => res.json());
};

const getTopProduct = (top) =>{
    let url= getUrl()+'product/gethotproduct?top='+top;

    console.log('CurrentURL=' +url);  
    return fetch(url)
    .then(res => res.json());
}

const getLastest = (top) => {
    let url= getUrl()+'product/lastest?top='+top;
    console.log('CurrentURL=' +url);  
    console.log(JSON.stringify(response, null, 4));
    return fetch(url)
    .then(res => res.json());
}


export {
    getAllProduct,
    getLastest,
    getTopProduct,
}