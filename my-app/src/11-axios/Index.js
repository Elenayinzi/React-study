import React, { Component } from 'react';
import axios from 'axios'
import request1 from '../untils/request'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
          products: []
        }
    }
    
    componentDidMount() {
        //真实开发环境中，拿到数据res后
        // this.setState({
        //   products: [...this.state.products,res]
        // })
        //axios获取网络数据,测试接口网址https://httpbin.org

        //1.axios原生get方式
        //axios({configObj})
        // axios({
        //     url: 'https://httpbin.org/get',
        //     method: 'get', //默认get
        //     params: {  //get方式传参，或者拼接到url后面
        //      name: 'elena',
        //      age: 18
        //     }
        // }).then( res => {
        //     console.log(res)
        // }).catch( err => {
        //     console.error(err)
        // })

        //2.axios原生post方式
        //axios({configObj})
        // axios({
        //     url: 'https://httpbin.org/post',
        //     method: 'post',
        //     data: { 
        //         name: 'elena',
        //         age: 18
        //     }
        // }).then( res => {
        //     console.log(res)
        // }).catch( err => {
        //     console.error(err)
        // })

        //3.axios的get方法直接进行get请求
        //axios.get(url,configObj)
        // axios.get('https://httpbin.org/get',{
        //     params: {
        //         name: 'elena',
        //         age: 19
        //     }
        // }).then( res => {
        //     console.log(res)
        // }).catch( err => {
        //     console.error(err)
        // })

        //4.axios的post方法直接进行post请求
        //axios.post(url,configObj)
        // axios.post('https://httpbin.org/post',{
        //     data: {
        //         name: 'elena',
        //         age: 20
        //     }
        // }).then( res => {
        //     console.log(res)
        // }).catch( err => {
        //     console.error(err)
        // })

        //5.axios的all方法直接进行多个请求
        // const request1 = axios({
        //     url: 'https://httpbin.org/get',
        //     method: 'get',
        //     params: { 
        //         name: 'elena',
        //         age: 18
        //     }
        // })
        // const request2 = axios({
        //     url: 'https://httpbin.org/get',
        //     method: 'get',
        //     params: { 
        //         name: 'elena',
        //         age: 19
        //     }
        // })
        // axios.all([request1,request2]).then( res=> {
        //     console.log(res)
        // }).catch( err => {
        //     console.error(err)
        // })

        //6.自定义封装的axios请求
        request1({
            url: '/get',
            params: {
                name: 'elena'
            }
        }).then( res => {
            console.log(res)
        }).catch( err => {
            console.error(err)
        })
    }
    
    render() {
        return (
            <div>
                APP
            </div>
        );
    }
}

export default Index;