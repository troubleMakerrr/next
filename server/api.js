// let devHttp = '/'
// if(process.env.NODE_ENV == 'development'){
const devHttp = 'http://localhost:8080/time/'
// }
const urlParams = {
    consumeList: devHttp + 'integrationPlatform/bids',                            //..借款获取产品详情
    consumeInfo: devHttp + 'integrationPlatform/bids/',                           //..标的详情
}
// const repeatUrl = {}
// for(let i in urlParams){
//     urlParams[i] = devHttp + urlParams[i]
// }

export default urlParams