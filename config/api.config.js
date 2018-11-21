const isPro = Object.is(process.env.NODE_ENV, 'production')
// const isPro = Object.is(process.env.NODE_ENV, 'testing')

module.exports = {
    baseUrl: isPro ?  'http://www.vnshop.cn/api/': 'api/' 
}