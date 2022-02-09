import { Component } from 'react'

//components
import { Error } from '../components/error/error'

class CatchError extends Component{
    constructor(props){
        super(props)

        this.state = {
            isError: false
        }
    }
   
    componentDidCatch(error){
        this.setState({ isError: true })
        
        console.log(error)
    }

    render(){
        const { isError } = this.state

        if(isError){
            return <Error titleError="sorry something went wrong" />
        }

        return this.props.children
    }
}

export { CatchError }