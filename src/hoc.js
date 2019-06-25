import React , {Component} from 'react'

const LoaderHoc = (WrappedComponent)=>{
    return class LoaderHoc extends Component {
        constructor(props){
            super(props);
            this.state = {
              isloading: true,
            }
          }
        
          isLoading(){
            setTimeout(() => {
              this.setState({
                isloading: false
              })
            }, 2000)
          }
        
        componentDidMount(){
            this.isLoading();
        }
        render() { 
        return (
            this.state.isloading === false ? <WrappedComponent {...this.props}></WrappedComponent> : <div class="lds-ring"><div></div><div></div><div></div><div></div></div>)
        }
    }}
export default LoaderHoc; 
    